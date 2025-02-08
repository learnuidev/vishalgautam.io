/* eslint-disable @typescript-eslint/no-unused-vars */
import { listTranslations } from "myelino";

export async function GET() {
  try {
    const translations = await listTranslations();

    return Response.json(translations);
  } catch (err) {
    return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw new Error(process.env.NODE_ENV);
  }
}
