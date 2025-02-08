import { listTranslations } from "myelino";

export async function GET() {
  const translations = await listTranslations();

  return Response.json(translations);
}
