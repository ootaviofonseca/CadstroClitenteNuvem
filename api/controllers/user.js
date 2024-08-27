import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM clientes";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO clientes(`nome`, `email`, `cpf`, `data_nascimento`) VALUES(?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.cpf,
    req.body.data_nascimento,
  ];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário criado com sucesso.");
  });
};

export const updateUser = (req, res) => {
  const q =
    "UPDATE clientes SET `nome` = ?, `email` = ?, `cpf` = ?, `data_nascimento` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.cpf,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM clientes WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};

export const searchUsers = (req, res) => {
  const searchTerm = `%${req.query.q}%`;
  const q = "SELECT * FROM clientes WHERE nome LIKE ? OR email LIKE ?";

  db.query(q, [searchTerm, searchTerm], (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};