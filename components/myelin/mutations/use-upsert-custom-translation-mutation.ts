/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { listCustomTranslationsQueryKey } from "../queries/use-list-custom-translations-query";

export const useUpsertCustomTranslationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({
      id,
      projectId,
      translations,
    }: {
      id: string;
      projectId: string;
      translations: any;
    }) => {
      const resp = await fetch("/api/myelin/upsert-custom-translation", {
        method: "POST",
        body: JSON.stringify({
          id,
          projectId,
          translations,
        }),
      });

      if (!resp.ok) {
        throw new Error(resp.statusText);
      }

      return resp.json();
    },
    onSuccess: () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      queryClient.refetchQueries([listCustomTranslationsQueryKey]);
    },
  });
};
