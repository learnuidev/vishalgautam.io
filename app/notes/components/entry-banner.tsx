"use client";

import Link from "next/link";
import { MoveLeft } from "lucide-react";
import { Entry } from "../state/entries";

export const EntryBanner = ({ entryItem }: { entryItem: Entry }) => {
  return (
    <section className="mt-40 mb-12">
      <Link
        href="/notes"
        className="text-sm mb-10 flex space-x-2 text-gray-500 items-center dark:hover:text-white hover:text-black transition"
      >
        {" "}
        <MoveLeft size={16} />
        <span> Back to Library</span>
      </Link>
      <h1 className="text-2xl font-bold">{entryItem.title}</h1>
      <p className="text-gray-500">{entryItem.description}</p>
    </section>
  );
};
