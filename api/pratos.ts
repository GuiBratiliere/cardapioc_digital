import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { category } = req.query;

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1",
    });

    let pratos =
      response.data.values
        ?.slice(1)
        .filter((row) => row[4] === "Ativo")
        .map((row) => ({
          id: row[0],
          name: row[1],
          description: row[5],
          price: Number(row[3]),
          image: row[7],
          tipoId: row[2],
        })) || [];

    if (category) {
      pratos = pratos.filter((p) => String(p.tipoId) === String(category));
    }

    return res.status(200).json({ data: pratos });
  } catch (error) {
    console.error("Erro /api/pratos:", error);
    return res.status(500).json({ error: "Erro ao buscar pratos" });
  }
}
