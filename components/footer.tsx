"use client";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className="text-center py-10 sm:text-center text-xs leading-5 text-gray-500">
      <p>{t("footer")}</p>
    </footer>
  );
};
