import { Router } from "express";
import { getTipos } from "../actions/get-tipos";

const router = Router();

router.get("/tipos", async (req, res) => {
  try {
    const data = await getTipos();
    res.json({ data });
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar tipos" });
  }
});

export default router;
