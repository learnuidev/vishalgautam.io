"use client";

import Link from "next/link";
import { EntryList } from "./notes/components/entry-list";
import { entries } from "./notes/state/entries";
import { NewsLetterSubscriptionForm } from "@/components/newsletter-subscription-form";

const homeBanner = {
  title: "Yo, I'm Vishal",
  description:
    "Welcome. I'm a senior software developer and content creator from Canada. Here, I share what I've been working on recently and things I've learned along the way.",
};

export default function Home() {
  return (
    <div className="mt-40">
      <section className="mb-24">
        <p className="text-2xl font-bold">{homeBanner.title}</p>
        <p className="dark:text-gray-400 mt-4">{homeBanner.description}</p>
      </section>

      <section className="mb-24">
        <h1 className="text-2xl font-bold mb-12">Recently Published</h1>

        <EntryList entries={entries} />

        <Link
          className="decoration-rose-400 underline-offset-4 dark:text-gray-400 text-gray-600 text-sm underline mt-4 inline-block"
          href="/notes"
        >
          View Notes
        </Link>
      </section>

      <NewsLetterSubscriptionForm />
    </div>
  );
}
