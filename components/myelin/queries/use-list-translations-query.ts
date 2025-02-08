"use client";

import { useQuery } from "@tanstack/react-query";

export const useListTranslationsQuery = () => {
  return useQuery({
    queryKey: ["list-translations"],
    queryFn: async () => {
      const resp = await fetch("/api/myelin/list-translations");
      return resp.json();
    },
  });
};
