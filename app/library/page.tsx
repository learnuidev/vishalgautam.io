"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { entries } from "./state/entries";

export default function Library() {
  const [filteredState, setFilteredState] = useState("");

  const filteredEntries = useMemo(() => {
    if (!filteredState) {
      return entries;
    }
    return entries.filter((entry) => {
      return JSON.stringify(entry)?.includes(filteredState);
    });
  }, [filteredState]);
  return (
    <main>
      <section className="mt-24">
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

        <div className="mt-8 space-y-8">
          {filteredEntries.map((entry) => {
            return (
              <li
                key={JSON.stringify(entry)}
                className="list-none bg-gray-50 p-4 dark:bg-gray-950"
              >
                <Link href={`/library/${entry?.id}`}>
                  <h4 className="font-semibold">{entry.title}</h4>
                  <p className="text-gray-500"> {entry.description}</p>
                </Link>
                <div className="space-x-2">
                  {entry.tags.map((tag) => {
                    return (
                      <Badge
                        onClick={() => {
                          setFilteredState(tag);
                        }}
                        variant={"outline"}
                        className="mt-2 dark:text-gray-600 text-gray-400 hover:text-black dark:hover:text-white cursor-pointer"
                        key={`${tag}-${entry.id}`}
                      >
                        {tag}
                      </Badge>
                    );
                  })}
                </div>
              </li>
            );
          })}
        </div>
      </section>
    </main>
  );
}
