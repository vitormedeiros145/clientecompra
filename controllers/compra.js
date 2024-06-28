import { db } from "../db.js";

export const getCompras = (_, res) => {
  const q = `
    select
      c.nome as nome_cliente,
      valor_total,
      data_compra,
      compra.id
    from public.compra compra
    left join public.cliente c on c.id = compra.id_client;
  `;

  db.query(q, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const createCompras = (req, res) => {
  const { valorTotal, idClient } = req.body;
  const query = `INSERT INTO public.compra (valor_total, id_client) VALUES ('${valorTotal}', '${idClient}') RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const updateCompras = (req, res) => {
  const { valorTotal }  = req.body;
  const query = `UPDATE public.compra SET valor_total = '${valorTotal}' WHERE id = ${req.params.id} RETURNING id`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data.rows);
  });
};

export const deleteCompras = (req, res) => {
  const query = `DELETE FROM public.compra WHERE id = ${req.params.id}`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json({});
  });
};

export const countCompras = (_, res) => {
  const query = `SELECT COUNT(*) FROM public.compra;`;

  db.query(query, (err, data) => {
    if (err) return res.status(500).json(err);

    const count = data.rows[0].count;
    return res.status(200).json({ count });
  });
};
