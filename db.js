import pg from "pg";

const { Client } = pg;

export const db = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "cliente_compra",
});

db.connect();
