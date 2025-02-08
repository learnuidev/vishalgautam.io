"use client";

import { useListTranslationsQuery } from "./queries/use-list-translations-query";
import myelinConfig from "@/myelin.config.json";

// function getNamespaces() {}

export const Myelin = ({ className }: { className?: string }) => {
  const { data } = useListTranslationsQuery();
  return (
    <div className={className}>
      <h1 className="text-center font-bold">
        Myelin - <span>{myelinConfig?.projectId}</span>
      </h1>

      {/* <Tabs></Tabs> */}

      <div>
        <code>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </code>
      </div>
    </div>
  );
};
