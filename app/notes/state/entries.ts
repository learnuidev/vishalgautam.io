// Define the interface for a single entry
export interface Entry {
  id: string; // Unique identifier for the entry
  slug: string; // slug of the entry
  title: string; // Title of the entry
  status: "published" | "unpublished"; // Status can be either published or unpublished
  tags: string[]; // Array of tags associated with the entry
  description: string; // Description of the entry,
  blog?: string;
}

export const multiLinguqalLocalizationApp: Entry = {
  id: "35a40520-de73-4817-9482-b4780e20ef29",
  slug: "multilingual-localization-app",
  title: "Multi Lingual Localization with NextJS, i18n-next & Myelin AI",
  status: "unpublished",
  tags: ["ai", "programming", "multi-lingual"],
  description:
    "In this tutorial we will learn about translating your NextJS app into multiple languages using i18next and myelino ai.",

  blog: ``,
};

export const ragApp: Entry = {
  id: "97f18f9d-10ca-4f7a-9968-3672ebeef8dc",
  slug: "rag-app",
  title: "RAG Application with NextJS, Pinecone, Deepseek and Convex",
  status: "unpublished",
  tags: ["ai", "programming"],
  description:
    "We'll build a RAG application using NextJS, Pinecone, Deepseek and Convex",
};

export const translationApp: Entry = {
  id: "c8a222c1-93a5-44ae-84ae-0bb1ed01f03f",
  title:
    "Full Stack Multi Lingual Translation App with NextJS, Google Translate, Clerk and Convex",
  slug: "translation-app",
  status: "unpublished",
  tags: ["ai", "programming", "languages", "translation"],
  description: "We'll build a multi lingual translation called heyy.sh",
};

export const entries: Entry[] = [
  multiLinguqalLocalizationApp,
  ragApp,
  translationApp,
];
