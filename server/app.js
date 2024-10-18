const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
const payment = require("./payment/payment");
const http = require("http");
const { Server } = require("socket.io");
const nodeMailer = require("nodemailer");
require("dotenv").config();

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("Novo cliente conectado:", socket.id);

  socket.on("disconnect", () => {
    console.log("Cliente desconectado:", socket.id);
  });
});

app.use((req, res, next) => {
  req.io = io;
  next();
});

app.use(cors());
app.use(express.json());
app.use("/payment", payment);

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

server.listen(2399, () => {
  console.log(`server listening on port 2399`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/send-email", async (req, res) => {
  const emailDetails = req.body;

  if (!emailDetails.name) {
    return res.status(401).send("Por favor, preencha o seu nome.");
  }

  if (!emailDetails.message) {
    return res
      .status(401)
      .send("Adicione uma mensagem para enterdermos seu interesse.");
  }

  await transporter
    .sendMail({
      to: process.env.MYMAIL,
      subject: `<💚> Mensagem CLiente Academia - <${emailDetails.email}>`,
      html: `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
              <div style="text-align: center; margin-bottom: 20px;">
                <h1 style="color: #0d9757; font-size: 24px; margin: 0;">Nova Mensagem Recebida</h1>
              </div>

              <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e0e0e0;">
                <h2 style="color: #0056b3; font-size: 20px; margin: 0 0 10px;">Nome: <strong>${emailDetails.name}</strong></h2>
                <h2 style="color: #0056b3; font-size: 20px; margin: 0 0 10px;">Email de Contato: <strong>${emailDetails.email}</strong></h2>
                <h2 style="color: #0056b3; font-size: 20px; margin: 0 0 20px;">Celular: <strong>${emailDetails.phone}</strong></h2>

                <h1 style="color: #0d9757; font-size: 22px; margin-bottom: 10px;">Mensagem:</h1>
                <p style="font-size: 16px; color: #555; background-color: #f4f4f4; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
                  ${emailDetails.message}
                </p>
              </div>

              <div style="text-align: center; margin-top: 30px; color: #777; font-size: 14px;">
                <p>Este e-mail foi gerado automaticamente. Por favor, não responda.</p>
              </div>
          </div>
            `,
    })
    .then(() => {
      console.log("Email sent");
      return res
        .status(200)
        .send("Email enviado, responderei o mais rápido possível.");
    })
    .catch((error) => {
      console.error("Erro sending email: ", error);
      return res
        .status(404)
        .send(
          "Erro de comunicação... Estamos trabalhando para consertar, tente contato por Whatsapp -> +55 (75) 982466403"
        );
    });
});
