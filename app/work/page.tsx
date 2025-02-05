"use client";

import { ComingSoon } from "@/components/coming-soon";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function Work() {
  const { t } = useTranslation("withWithMe");
  return (
    <div>
      <div className="mt-40">
        <div className="mx-auto max-w-xl mb-12 dark:mb-2 text-center">
          <h1 className="text-4xl mb-3 font-bold tracking-tight">
            {t("title")}
          </h1>

          <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">
            {t("description")}
          </p>
        </div>
      </div>

      <section>
        <ComingSoon />
      </section>
    </div>
  );
}
