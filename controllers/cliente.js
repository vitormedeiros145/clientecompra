import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM public.cliente;";

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const createUser = (req, res) => {
  const { nome, email, telefone } = req.body;
  const query = `INSERT INTO public.cliente (nome, email, telefone) VALUES ('${nome}', '${email}', '${telefone}') RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const updateUser = (req, res) => {
  const { nome, email, telefone } = req.body;
  const query = `UPDATE public.cliente SET nome = '${nome}', email = '${email}', telefone = '${telefone}' WHERE id = ${req.params.id} RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const deleteUser = (req, res) => {
  const query = `DELETE FROM public.cliente WHERE id = ${req.params.id}`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json({});
  });
};

export const countUsers = (_, res) => {
  const query = `SELECT COUNT(*) FROM public.cliente;`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    const count = data.rows[0].count;
    return res.status(200).json({ count });
  });
};
