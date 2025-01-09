"use client";

import Link from "next/link";
import { EntryList } from "./library/components/entry-list";
import { entries } from "./library/state/entries";
import { NewsLetterSubscriptionForm } from "@/components/newsletter-subscription-form";

const homeBanner = {
  title: "Yo, I'm Vishal",
  description:
    "Welcome. I'm a senior software developer and content creator from Canada. Here, I share what I've been working on recently and things I've learned along the way.",
};

export default function Home() {
  return (
    <div className="mt-32">
      <section className="mb-24">
        <h2 className="text-2xl font-bold">{homeBanner.title}</h2>
        <p className="dark:text-gray-400 mt-4">{homeBanner.description}</p>
      </section>

      <section>
        <h1 className="text-2xl font-bold mb-12">Recently Published</h1>

        <EntryList entries={entries} />

        <Link
          className="decoration-rose-400 underline-offset-4 underline mt-4 inline-block"
          href="/library"
        >
          View Library
        </Link>
      </section>

      <NewsLetterSubscriptionForm />
    </div>
  );
}
