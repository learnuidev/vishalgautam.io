"use client";

import Link from "next/link";
import { EntryList } from "./notes/components/entry-list";
import { entries } from "./notes/state/entries";
import { NewsLetterSubscriptionForm } from "@/components/newsletter-subscription-form";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function Home() {
  const { t } = useTranslation(["home", "notes"]);

  return (
    <div className="mt-40">
      <section className="mb-24">
        <p className="text-2xl font-bold">{t("home:title")}</p>
        <p className="dark:text-gray-400 mt-4">{t("home:description")}</p>
      </section>

      <section className="mb-24">
        <h1 className="text-2xl font-bold mb-12">
          {t("home:recently.published")}
        </h1>

        <EntryList entries={entries} />

        <Link
          className="decoration-rose-400 underline-offset-4 dark:text-gray-400 text-gray-600 text-sm underline mt-4 inline-block"
          href="/notes"
        >
          {t("notes:notes.view")}
        </Link>
      </section>

      <NewsLetterSubscriptionForm />
    </div>
  );
}
