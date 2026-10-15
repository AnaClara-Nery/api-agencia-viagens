const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "agencia_viagens",
});

pool.getConnection((erro, conexao) => {
  if (erro) {
    console.error("Falha na conexão com o banco:", erro.message);
    return;
  }
  console.log("Conectado ao banco agencia_viagens");
  conexao.release();
});

module.exports = pool;