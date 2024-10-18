const express = require("express");
const router = express.Router();

const client = require("./mercadoPagoConfig.js");
const pool = require("../db/db.js");
const { v4: uuidv4 } = require("uuid");
const { Payment } = require("mercadopago");
require("dotenv").config();

const payment = new Payment(client);

// Teste de status de pagamentoconst { Server } = require("socket.io");
async function verificarStatusPagamento(paymentId) {
  try {
    const pagamento = await payment.findById(paymentId);

    // Obtém o status do pagamento
    const status = pagamento.body.status;

    console.log(`Status do pagamento ${paymentId}: ${status}`);

    return status;
  } catch (error) {
    console.error("Erro ao verificar status do pagamento:", error);
    throw error;
  }
}

router.get("/checkPaymentStatus", async (req, res) => {
  const id = req.query.paymentId;
  const productId = req.query.productId;

  let status = "";
  let liberado = false;

  const query = `
      UPDATE loja.items_loja
      SET
        stock = stock - 1
      WHERE
        id = $1
    `;

  try {
    // Obtém o status do pagamento
    const response = await payment.get({ id: id });
    status = response.status;

    // Define liberado com base no status (ajuste conforme necessário)
    if (status) {
      liberado = true;
    } // Ajuste a condição conforme necessário

    // Atualiza o estoque se liberado for verdadeiro
    if (liberado) {
      await pool.query(query, [productId]);
    }

    // Envia a resposta ao cliente
    return res.status(200).json({ status });
  } catch (error) {
    console.log("Erro ao consultar status de pagamento: ", error);
    return res.status(500).send(error);
  }
});

router.post("/web-hooks", async (req, res) => {
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

        req.io.emit("payment-approved", {
          status: "approved",
        });
      }

      res.status(200).send("Pagamento Processado com sucesso.");
    } else {
      console.log("Ação não tratada: ", paymentData.action);

      req.io.emit("payment-not-approved", {
        status: "error",
      });
      res.status(400).send("Ação não tratada.");
    }
  } catch (error) {
    console.error("Erro ao processar webhook:", error);
    res.status(500).send("Erro ao processar webhook.");
  }
});

router.post("/client-monthly-payment", async (req, res) => {
  try {
    const client = req.body;

    const date = new Date();
    const currentYear = date.getFullYear();

    const clientBirth = new Date(client.birth);
    const clientAge = currentYear - clientBirth.getFullYear();

    const query = await pool.query(
      `
        SELECT price FROM courses.courses
        WHERE name = $1
      `,
      [client.course]
    );
    let price = query.rows[0].price;

    if (clientAge <= 15 && client.course === "Jiu-Jitsu") {
      price = price - 20;
    }

    // // Lógica de valor aleatório
    const requestOptions = {
      idempotencyKey: uuidv4(),
    };

    const body = {
      transaction_amount: price,
      description: `Pagamento de Mensalidade de ${client.course}`,
      payment_method_id: "pix",
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

      req.io.emit("payment-approved", {
        status: "approved",
      });

      // console.log(client);
      // await pool.query(
      //   `
      //   INSERT INTO clients.payment (id_client, payment_id, payment_status, created_at)
      //   VALUES ($1, $2, false, NOW())
      // `,
      //   [client.id, paymentId]
      // );
      res.send(response);

      //COlocar essa resposta de volta para produção
      // res.status(200).send("Pagamento em processamento...");
    } else {
      res.status(400).send("Erro na criação do pagamento.");
    }
  } catch (error) {
    console.error("Erro interno no servidor: ", error);
    res.status(500).send("Erro interno no servidor.");
  }
});

module.exports = router;
