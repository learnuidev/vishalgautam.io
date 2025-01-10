"use client";
import { Input } from "@/components/ui/input";
import { useMemo, useState } from "react";
import { EntryList } from "./components/entry-list";
import { entries } from "./state/entries";

export default function Library() {
  const [filteredState, setFilteredState] = useState("");

  const filteredEntries = useMemo(() => {
    if (!filteredState) {
      return entries;
    }
    return entries.filter((entry) => {
      return JSON.stringify(entry)
        ?.toLowerCase()
        ?.includes(filteredState?.toLowerCase());
    });
  }, [filteredState]);
  return (
    <main>
      <section className="mt-40">
        <h1 className="text-2xl font-bold mb-12">Library</h1>

        <Input
          type="text"
          value={filteredState}
          onChange={(event) => {
            setFilteredState(event?.target.value);
          }}
          className="rounded-full max-w-md"
          placeholder="Search Library..."
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
