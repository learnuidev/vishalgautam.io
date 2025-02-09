"use client";

import { useQuery } from "@tanstack/react-query";

export const listCustomTranslationsQueryKey = "list-custom-translations";
export const useListCustomTranslationsQuery = (options = {}) => {
  return useQuery({
    queryKey: [listCustomTranslationsQueryKey],
    queryFn: async () => {
      const resp = await fetch("/api/myelin/list-custom-translations");

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    },
    // retry: false,
    ...options,
  });
};
