import express from "express";
import clienteRoutes from "./routes/cliente.js";
import compraRoutes from "./routes/compra.js";

import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/clientes", clienteRoutes);
app.use("/api/compras", compraRoutes);

app.listen(8080);
