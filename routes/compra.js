import express from "express";
import {
  getCompras,
  createCompras,
  updateCompras,
  deleteCompras,
  countCompras,
} from "../controllers/compra.js";

const router = express.Router();

router.get("/", getCompras);
router.post("/", createCompras);
router.put("/:id", updateCompras);
router.delete("/:id", deleteCompras);
router.get("/count", countCompras);

export default router;
