const express = require("express");
const cors = require("cors");
const pool = require("./db/db");
const payment = require("./payment/payment");
const http = require("http");
const { Server } = require("socket.io");

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

server.listen(2399, () => {
  console.log(`server listening on port 2399`);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
