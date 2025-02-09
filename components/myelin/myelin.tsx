/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useListTranslationsQuery } from "./queries/use-list-translations-query";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedLoadingText } from "../animated-loading-text";
import myelinConfig from "@/myelin.config.json";
import { Button } from "../ui/button";
import { useUpsertCustomTranslationMutation } from "./mutations/use-upsert-custom-translation-mutation";
import { useListCustomTranslationsQuery } from "./queries/use-list-custom-translations-query";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/libs/i18n-next/use-translation";

function getNamespaces(translations: any): string[] {
  if (Array.isArray(translations)) {
    return [
      ...new Set(
        translations.map((item: any) => {
          return item?.fileName;
        })
      ),
    ] as string[];
  }

  return [];
}

const useGetCustomTranslations = (id: string) => {
  const { data: customTranslationsList } = useListCustomTranslationsQuery({});

  return customTranslationsList?.find(
    (translation: any) => translation?.id === id
  );
};

function TranslationItem({ item, keyTab }: any) {
  const [addCustomTranslation, setAddCustomTranslation] = useState(false);
  const [customTranslationInput, setCustomTranslationInput] = useState(
    item?.[keyTab]
  );

  const { toast } = useToast();

  const customTranslations = useGetCustomTranslations(item?.id);

  const customTranslation = customTranslations?.translations?.[keyTab];

  const upsertCustomTranslation = useUpsertCustomTranslationMutation();

  useEffect(() => {
    if (customTranslation) {
      setCustomTranslationInput(customTranslation);
    }
  }, [customTranslation]);

  return (
    <div
      key={JSON.stringify(item)}
      className="dark:bg-[rgb(21,22,23)] bg-gray-100 px-4 py-2 rounded-2xl"
    >
      <div className="flex justify-between items-center mb-4">
        <p className="text-[16px] text-gray-500">{item?.lang}</p>

        {customTranslation && (
          <p className={"text-[16px] text-gray-500"}>custom</p>
        )}
      </div>

      {addCustomTranslation ? (
        <input
          value={customTranslationInput}
          onChange={(event) => {
            setCustomTranslationInput(event.target.value);
          }}
          className="block mb-4 w-full dark:bg-gray-150 p-2 focus:outline-0 border-0 border-none"
          placeholder={"Custom translation goes here..."}
        />
      ) : (
        <h4 className="mb-4 p-2">{customTranslation || item?.[keyTab]}</h4>
      )}

      {addCustomTranslation ? (
        <div className="space-x-4">
          <Button
            className="text-sm rounded-full"
            onClick={() => {
              upsertCustomTranslation
                .mutateAsync({
                  id: item?.id,
                  projectId: item?.projectId,
                  translations: {
                    [keyTab]: customTranslationInput,
                  },
                })
                .then(() => {
                  toast({
                    title: "Success 🎉",
                    description: `Updated successfully`,
                  });
                  setAddCustomTranslation(false);
                });
            }}
          >
            {upsertCustomTranslation?.isPending ? "Saving..." : "Save"}
          </Button>

          <Button
            className="text-sm rounded-full"
            variant={"outline"}
            onClick={() => {
              setAddCustomTranslation((prev) => !prev);
            }}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <Button
          className="text-sm rounded-full"
          variant={"outline"}
          onClick={() => {
            setAddCustomTranslation((prev) => !prev);
          }}
        >
          {customTranslation
            ? "Edit custom translation"
            : "Add custom translation"}
        </Button>
      )}
    </div>
  );
}

// function KeyTabs() {}

export const Myelin = ({ className }: { className?: string }) => {
  const [tab, setTab] = useState("common.json");
  const [keyTab, setKeyTab] = useState("");

  const { t } = useTranslation(["common", "myelin"]);

  const { data, isLoading } = useListTranslationsQuery({});

  useEffect(() => {
    console.log("DATA", data);
    if (Array.isArray(data)) {
      const value = data?.[0]?.fileName;

      const selectedData = data?.filter(
        (translation: any) => translation?.fileName === value
      );

      const filteredTranslationsOnly = selectedData?.map(
        (item: any) => item?.translations
      );

      const newKeyTab = Object.keys(filteredTranslationsOnly?.[0])?.[0];

      console.log("KEY TAB", newKeyTab);

      setTab(value);
      setKeyTab(newKeyTab);
    }
  }, [data]);

  const nameSpaces = getNamespaces(data || []);

  const filteredTranslations = useMemo(() => {
    if (Array.isArray(data)) {
      return data?.filter((translation: any) => translation?.fileName === tab);
    }
  }, [data, tab]);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center mt-32">
        <AnimatedLoadingText
          className="text-xl font-light"
          message={t("myelin:loadingTranslations")}
        />
      </div>
    );
  }

  if (data?.nodeEnv === "development") {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl mt-32">{t("common:error")}</h1>

        <p className="text-xl font-light text-gray-700 dark:text-gray-300 mt-4">
          {t("common:somethingWentWrong")}
        </p>
      </div>
    );
  }

  if (data?.nodeEnv === "production") {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl mt-32">{t("common:error")}</h1>

        <p className="text-xl font-light text-gray-700 dark:text-gray-300 mt-4">
          {t("myelin:coming-soon")}
        </p>

        <Link href="/" className="mt-8">
          {t("common:homePage")}
        </Link>
      </div>
    );
  }

  const filteredTranslationsOnly = filteredTranslations?.map(
    (item) => item?.translations
  );

  const selectedKeys = Object.keys(filteredTranslationsOnly?.[0]);

  const sourceLang = myelinConfig?.locale?.sourceLanguage;

  const translationsIncludingSourceLang = filteredTranslations
    ?.map((item) => [item, item?.translations])
    ?.map(([item, translations]) => {
      return {
        ...item,
        [keyTab]: translations?.[keyTab],
      };
    });

  const sourceTranslation = translationsIncludingSourceLang?.find(
    (item) => item?.lang === sourceLang
  );

  const translationsWithoutSourceLang = translationsIncludingSourceLang?.filter(
    (item) => {
      return item?.lang !== sourceLang;
    }
  );

  return (
    <div className={cn(className, "relative")}>
      <div className="fixed top-0 w-full z-30 dark:bg-[rgb(9,10,11)]/75 bg-white/75 dark:bg-react/75 backdrop-blur-sm">
        <div>
          <Tabs
            defaultValue={tab}
            value={tab}
            className="flex justify-center items-center"
            onValueChange={(value) => {
              setTab(value);
              const selectedData = data?.filter(
                (translation: any) => translation?.fileName === value
              );

              const filteredTranslationsOnly = selectedData?.map(
                (item: any) => item?.translations
              );

              const newKeyTab = Object.keys(filteredTranslationsOnly?.[0])?.[0];

              setKeyTab(newKeyTab);
            }}
          >
            <TabsList className="space-x-4 rounded-full mt-2 hover:shadow-lg transition overflow-y-auto">
              {nameSpaces?.map((ns: string) => {
                return (
                  <TabsTrigger
                    className="rounded-full focus-visible:ring-0"
                    key={ns}
                    value={ns}
                  >
                    {ns}
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
          <div></div>
        </div>
      </div>

      {/* <Tabs></Tabs> */}

      <div className="mt-16 text-2xl font-light">
        {/* <div className="my-8 flex justify-between items-center">
          <h4 className="">{tab}</h4>

          <p className=" dark:text-gray-400">{totalKeys} keys</p>
        </div> */}

        <Tabs
          defaultValue={keyTab}
          value={keyTab}
          className=""
          onValueChange={(value) => {
            setKeyTab(value);
          }}
        >
          <TabsList className="space-x-4 rounded-full hover:shadow-lg transition dark:bg-black bg-white overflow-y-auto w-full mb-4">
            {selectedKeys?.map((ns: string) => {
              return (
                <TabsTrigger
                  className="rounded-full focus-visible:ring-0 bg-none"
                  key={ns}
                  value={ns}
                >
                  {ns}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>

        <div className="px-16 relative">
          <div className="sticky bg-gray-200 dark:bg-[rgb(16,17,18)] px-4 py-[2px] top-[42px] rounded-2xl">
            <p className="mt-4 text-[16px] text-gray-500">{sourceLang}</p>
            <h4 className="mb-4">{sourceTranslation?.[keyTab]}</h4>
          </div>

          <div className="space-y-8 mt-12">
            {translationsWithoutSourceLang?.map((item: any) => {
              return (
                <TranslationItem
                  keyTab={keyTab}
                  item={item}
                  key={JSON.stringify(item)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
