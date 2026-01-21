import type { VercelRequest, VercelResponse } from "@vercel/node";
import { google } from "googleapis";
import dotenv from "dotenv";
dotenv.config();
export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS!),
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet2",
    });

    const tipos = response.data.values?.map((row) => ({
      id: row[0],
      name: row[0],
    }));
    console.log("ENV OK?", !!process.env.GOOGLE_APPLICATION_CREDENTIALS);
    console.log("SHEET ID:", process.env.GOOGLE_SHEET_ID);

    return res.status(200).json({ data: tipos });
  } catch (error) {
    console.error("Erro /api/tipos:", error);
    return res.status(500).json({ error: "Erro ao buscar categorias" });
  }
}
