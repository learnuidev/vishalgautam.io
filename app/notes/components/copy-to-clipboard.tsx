"use client";
import { copyTextToClipboard } from "@/libs/misc/copy-text-to-clipboard";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

export const CopyToClipboard = ({ text }: { text: string }) => {
  const [showSucces, setShowSuccess] = useState(false);
  return (
    <div className="flex justify-end mb-4">
      <button
        className="hover:text-gray-400 transition-all"
        onClick={() => {
          copyTextToClipboard(text).then(() => {
            setShowSuccess(true);

            setTimeout(() => {
              setShowSuccess(false);
            }, 2000);
          });
        }}
      >
        {showSucces ? (
          <CheckIcon size={20} className="text-green-500" />
        ) : (
          <CopyIcon size={20} />
        )}
      </button>
    </div>
  );
};
