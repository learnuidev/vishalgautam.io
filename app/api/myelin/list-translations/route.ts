/* eslint-disable @typescript-eslint/no-unused-vars */
import { listTranslations } from "myelino";

export async function GET() {
  try {
    if (process.env.NODE_ENV === "production") {
      throw new Error("This is a development feature only");
    }

    const translations = await listTranslations();

    return Response.json(translations);
  } catch (err) {
    return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw new Error(process.env.NODE_ENV);
  }
}
