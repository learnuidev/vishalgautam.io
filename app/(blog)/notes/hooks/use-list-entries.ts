import { useTranslation } from "@/libs/i18n-next/use-translation";
import { Entry, multiLingualApp } from "../state/entries";

export const useListEntries = (): Entry[] => {
  const { t } = useTranslation("multilingual_app");
  return [
    {
      ...multiLingualApp,
      title: t("blog.title"),
      description: t("blog.description"),
    },
  ];
};
