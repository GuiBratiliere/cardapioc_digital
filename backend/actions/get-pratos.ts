import { google } from "googleapis";

interface Prato {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export async function getPratos() {
  try {
    const keyFilePath = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS!);

    const auth = new google.auth.GoogleAuth({
      credentials: keyFilePath,
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth: auth });

    const res = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Sheet1",
    });

    // Retorna as linhas diretamente
    const rows = res.data.values;

    if (!rows || rows.length === 0) return [];

    // remove o cabeçalho
    const [, ...data] = rows;

    return data.map((row) => ({
      id: row[0],
      name: row[1],
      description: row[5],
      price: Number(row[3]),
      image: row[7],
      tipoId: row[2],
    }));
  } catch (error) {
    console.error("Erro ao buscar dados da planilha:", error);
    return [];
  }
}
