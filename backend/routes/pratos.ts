import { Router } from "express";
import { getPratos } from "../actions/get-pratos";

const router = Router();

router.get("/pratos", async (req, res) => {
  const { category } = req.query;

  const pratos = await getPratos();

  const filtered = category
    ? pratos.filter((p) => String(p.tipoId) === String(category))
    : pratos;

  res.json({ data: filtered });
});

export default router;
