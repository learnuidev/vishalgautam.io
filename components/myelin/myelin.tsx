"use client";

import { useListTranslationsQuery } from "./queries/use-list-translations-query";

export const Myelin = ({ className }: { className?: string }) => {
  const { data } = useListTranslationsQuery();
  return (
    <div className={className}>
      <h1>Myelin</h1>

      <div>
        <code>
          <pre>{JSON.stringify(data, null, 4)}</pre>
        </code>
      </div>
    </div>
  );
};
