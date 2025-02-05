"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { EntryList } from "./components/entry-list";
import { entries } from "./state/entries";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function Library() {
  const [filteredState, setFilteredState] = useState("");

  const { t } = useTranslation("notes");

  const filteredEntries = useMemo(() => {
    if (!filteredState) {
      return entries;
    }
    return entries
      .filter((item) => item.status === "published")
      .filter((entry) => {
        return JSON.stringify(entry)
          ?.toLowerCase()
          ?.includes(filteredState?.toLowerCase());
      });
  }, [filteredState]);
  return (
    <main>
      <section className="mt-40">
        <h1 className="text-2xl font-bold mb-12">{t("notes.title")}</h1>

        <Input
          type="text"
          value={filteredState}
          onChange={(event) => {
            setFilteredState(event?.target.value);
          }}
          className="rounded-full max-w-md"
          placeholder={t("notes.search")}
        />

        <EntryList
          entries={filteredEntries}
          onTagClick={(tag) => {
            setFilteredState(tag);
          }}
        />
      </section>
    </main>
  );
}
