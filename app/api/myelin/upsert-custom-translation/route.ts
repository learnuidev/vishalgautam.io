/* eslint-disable @typescript-eslint/no-unused-vars */
import { upsertCustomTranslation } from "myelino";

export async function POST(req: Request) {
  const { id, projectId, translations } = await req.json();
  try {
    if (process.env.NODE_ENV === "production") {
      throw new Error("This is a development feature only");
    }

    const translatedItem = await upsertCustomTranslation({
      id,
      projectId,
      translations,
    });

    return Response.json(translatedItem);
  } catch (err) {
    return Response.json({ nodeEnv: process.env.NODE_ENV });
    throw new Error(process.env.NODE_ENV);
  }
}
