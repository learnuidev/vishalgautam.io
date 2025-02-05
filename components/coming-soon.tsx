"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";
import { Nothing } from "./nothing";

export const ComingSoon = () => {
  const { t } = useTranslation("common");
  return (
    <section>
      <Nothing message={t("coming-soon")} />
    </section>
  );
};
