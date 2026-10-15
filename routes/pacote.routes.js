const express = require("express");
const router = express.Router();
const db = require("../config/db");

// GET /pacote - lista todos
router.get("/", (req, res) => {
  const sql = "SELECT id, destino, dias, preco FROM pacote";

  db.query(sql, (erro, resultados) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao listar pacotes", detalhe: erro.message });
    }
    return res.status(200).json({ total: resultados.length, pacotes: resultados });
  });
});

// GET /pacote/:id - busca por id
router.get("/:id", (req, res) => {
  const sql = "SELECT id, destino, dias, preco FROM pacote WHERE id = ?";

  db.query(sql, [req.params.id], (erro, resultados) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao buscar pacote", detalhe: erro.message });
    }
    if (resultados.length === 0) {
      return res.status(404).json({ erro: "Pacote não encontrado" });
    }
    return res.status(200).json({ pacote: resultados[0] });
  });
});

// POST /pacote - cadastra
router.post("/", (req, res) => {
  const { destino, dias, preco } = req.body;

  if (!destino || dias === undefined || preco === undefined) {
    return res.status(400).json({ erro: "Informe destino, dias e preco" });
  }

  const sql = "INSERT INTO pacote (destino, dias, preco) VALUES (?, ?, ?)";

  db.query(sql, [destino, dias, preco], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao cadastrar pacote", detalhe: erro.message });
    }
    return res.status(201).json({
      mensagem: "Pacote cadastrado com sucesso",
      pacote: { id: resultado.insertId, destino, dias, preco },
    });
  });
});

// PUT /pacote/:id - atualiza
router.put("/:id", (req, res) => {
  const { destino, dias, preco } = req.body;

  if (!destino || dias === undefined || preco === undefined) {
    return res.status(400).json({ erro: "Informe destino, dias e preco" });
  }

  const sql = "UPDATE pacote SET destino = ?, dias = ?, preco = ? WHERE id = ?";

  db.query(sql, [destino, dias, preco, req.params.id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao atualizar pacote", detalhe: erro.message });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Pacote não encontrado" });
    }
    return res.status(200).json({
      mensagem: "Pacote atualizado com sucesso",
      pacote: { id: Number(req.params.id), destino, dias, preco },
    });
  });
});

// DELETE /pacote/:id - remove
router.delete("/:id", (req, res) => {
  const sql = "DELETE FROM pacote WHERE id = ?";

  db.query(sql, [req.params.id], (erro, resultado) => {
    if (erro) {
      return res.status(500).json({ erro: "Erro ao remover pacote", detalhe: erro.message });
    }
    if (resultado.affectedRows === 0) {
      return res.status(404).json({ erro: "Pacote não encontrado" });
    }
    return res.status(200).json({ mensagem: "Pacote removido com sucesso" });
  });
});

module.exports = router;