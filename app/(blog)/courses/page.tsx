"use client";

import { ComingSoon } from "@/components/coming-soon";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function Courses() {
  const { t } = useTranslation("common");
  return (
    <main>
      <section className="mt-40">
        <h1 className="text-2xl font-bold mb-12 text-left">{t("courses")}</h1>
      </section>
      <ComingSoon />
    </main>
  );
}
