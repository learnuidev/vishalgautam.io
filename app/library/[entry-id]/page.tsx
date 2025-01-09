"use client";
import { Nothing } from "@/components/nothing";
import { entries } from "../state/entries";
import { useLibraryParams } from "./hooks/use-library-params";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function LibraryEntry() {
  const { entryId } = useLibraryParams();

  const entryItem = entries?.find((entry) => entry.id === entryId);

  if (!entryItem) {
    return <Nothing />;
  }

  return (
    <main>
      <section className="mt-24">
        <Link
          href="/library"
          className="text-sm mb-10 flex space-x-2 text-gray-500 items-center"
        >
          {" "}
          <MoveLeft size={16} />
          <span> Back to Library</span>
        </Link>
        <h1 className="text-2xl font-bold mb-12">{entryItem.title}</h1>
      </section>
    </main>
  );
}
