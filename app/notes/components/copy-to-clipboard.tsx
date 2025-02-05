"use client";
import { copyTextToClipboard } from "@/libs/misc/copy-text-to-clipboard";
import { CopyIcon } from "lucide-react";

export const CopyToClipboard = ({ text }: { text: string }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        className=""
        onClick={() => {
          copyTextToClipboard(text);
        }}
      >
        <CopyIcon />
      </button>
    </div>
  );
};
