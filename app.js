const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");

const pacoteRoutes = require("./routes/pacote.routes");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({ mensagem: "API REST - Agência de Viagens" });
});

app.use("/pacote", pacoteRoutes);

app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

module.exports = app;