/* eslint-disable @typescript-eslint/no-unused-vars */
import { listCustomTranslations } from "myelino";

export async function GET(req: Request) {
  try {
    if (process.env.NODE_ENV === "production") {
      throw new Error("This is a development feature only");
    }

    const customTranslations = await listCustomTranslations();

    return Response.json(customTranslations);
  } catch (err) {
    return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw new Error(process.env.NODE_ENV);
  }
}
