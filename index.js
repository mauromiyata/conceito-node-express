const express = require("express");

const server = express();

// query params = ?teste=1
// route params = /users/1
// request bady = {"name": "nome"}

server.get("/", (req, res) => {
  const nome = req.query.nome;
  return res.json({ message: `hello ${nome}` });
});

server.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const nome = req.query.nome;

  return res.json({ name: nome, id: id });
});
server.listen(3000);
