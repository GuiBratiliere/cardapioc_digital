import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tiposRoutes from "./routes/tipos";
import pratosRoutes from "./routes/pratos";

dotenv.config();
const app = express();

app.use(
  cors({
    origin: "http://localhost:8080",
  }),
);

app.use(express.json());
app.use("/api", tiposRoutes);
app.use("/api", pratosRoutes);

app.listen(3001, () => {
  console.log("API rodando em http://localhost:3001");
});

export default app;
