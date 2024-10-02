const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
const payment = require("./payment/payment");

const app = express();
app.use(cors());
app.use(express.json());

app.listen(2399, () => {
  console.log(`server listening on port 2399`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/payment", payment);

app.post("/client-monthly-payment", async (req, res) => {
  try {
    const { client, price, method } = req.body;

    // const requestOptions = {
    //   idempotencyKey: uuidv4(),
    // };

    const body = {
      transaction_amount: parseFloat(price),
      description: "Pagamento de mensalidade",
      payment_method_id: method,
      notification_url:
        "https://aeesi-local-server.vercel.app/payment/web-hooks",
      payer: {
        email: client.email,
        identification: {
          type: "cpf",
          number: client.cpf,
        },
      },
    };

    const response = await payment.create({ body, requestOptions });

    if (response && response.status === "pending") {
      const paymentId = response.id;
      const paymentStatus = response.status;

      await pool.query(
        `
      INSERT INTO clients.payment (nome, id_client, payment_id, payment_status, created_at)
      VALUES ($1, $2, $3, $4, NOW())
      `,
        [client.name, client.id, paymentId, paymentStatus]
      );

      res.status(200).send("Pagamento em processamento...");
    } else {
      res.status(400).send("Erro na criação do pagamento.");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro interno no servidor!");
  }
});

// Exemplo do webhook original
app.post("/web-hooks", async (req, res) => {
  try {
    const paymentData = req.body;

    if (
      paymentData.action === "payment.created" ||
      paymentData.action === "payment.updated"
    ) {
      console.log("Novo pagamento registrado: ", paymentData.data.id);

      const paymentId = paymentData.data.id;

      const paymentDetail = await payment.get({ id: paymentId });

      if (paymentDetail.status === "approved") {
        await pool.query(
          `
          UPDATE clients.payment
          SET 
            payment_status = $1, updated_at = NOW()
          WHERE 
            payment_id = $2
          `,
          [paymentDetail.status, paymentId]
        );

        // Socket.emit("paymentResult", paymentDetail.status); -> Configurar web socket para enviar ao cliente o resultado
      }

      res.status(200).send("Webhook processado com sucesso.");
    } else {
      console.log("Ação não tratada: ", paymentData.action);

      res.status(400).send("Ação não tratada.");
    }
  } catch (error) {
    console.error("Erro ao processar webhook:", error);
    res.status(500).send("Erro ao processar webhook.");
  }
});
