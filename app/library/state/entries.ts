// Define the interface for a single entry
export interface Entry {
  id: string; // Unique identifier for the entry
  title: string; // Title of the entry
  status: "published" | "unpublished"; // Status can be either published or unpublished
  tags: string[]; // Array of tags associated with the entry
  description: string; // Description of the entry
}

export const entries: Entry[] = [
  {
    id: "97f18f9d-10ca-4f7a-9968-3672ebeef8dc",
    title: "RAG Application with NextJS, Pinecone, Deepseek and Convex",
    status: "unpublished",
    tags: ["ai", "programming"],
    description:
      "We'll build a RAG application using NextJS, Pinecone, Deepseek and Convex",
  },
  {
    id: "c8a222c1-93a5-44ae-84ae-0bb1ed01f03f",
    title:
      "Full Stack Multi Lingual Translation App with NextJS, Google Translate, Clerk and Convex",
    status: "unpublished",
    tags: ["ai", "programming", "languages", "translation"],
    description: "We'll build a multi lingual translation called heyy.sh",
  },
];
