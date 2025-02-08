"use client";

import { useQuery } from "@tanstack/react-query";

export const useListTranslationsQuery = (options = {}) => {
  return useQuery({
    queryKey: ["list-translations"],
    queryFn: async () => {
      const resp = await fetch("/api/myelin/list-translations");

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    },
    retry: false,
    ...options,
  });
};
