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

// function KeyTabs() {}

export const Myelin = ({ className }: { className?: string }) => {
  const [tab, setTab] = useState("common.json");
  const [keyTab, setKeyTab] = useState("");

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
          message={"Loading translations..."}
        />
      </div>
    );
  }

  if (data?.nodeEnv === "development") {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl mt-32">Error</h1>

        <p className="text-xl font-light text-gray-700 dark:text-gray-300 mt-4">
          Something went wrong
        </p>
      </div>
    );
  }

  if (data?.nodeEnv === "production") {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl mt-32">Error</h1>

        <p className="text-xl font-light text-gray-700 dark:text-gray-300 mt-4">
          Coming soon. This is a developmental feature only for now.
        </p>

        <Link href="/" className="mt-8">
          Home Page{" "}
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
    ?.map((item) => [item?.lang, item?.translations])
    ?.map(([lang, item]) => {
      return {
        lang: lang,
        [keyTab]: item?.[keyTab],
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
    <div className={cn(className, "relative px-8")}>
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

              console.log("KEY TAB", newKeyTab);

              setKeyTab(newKeyTab);
            }}
          >
            <TabsList className="space-x-4 rounded-full hover:shadow-lg transition overflow-y-auto">
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
          <TabsList className="space-x-4 rounded-full hover:shadow-lg transition dark:bg-black bg-white overflow-y-auto w-full">
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

        <div className="px-32">
          <p className="mt-4 text-[16px] text-gray-500">{sourceLang}</p>
          <h4 className="mb-4">{sourceTranslation?.[keyTab]}</h4>

          <div className="space-y-8 mt-12">
            {translationsWithoutSourceLang?.map((item: any) => {
              return (
                <div
                  key={JSON.stringify(item)}
                  className="dark:bg-[rgb(21,22,23)] bg-gray-500 p-4 rounded-2xl"
                >
                  <p className="mt-4 text-[16px] text-gray-500">{item?.lang}</p>
                  <h4 className="mb-4">{item?.[keyTab]}</h4>

                  <Button className="text-sm" variant={"outline"}>
                    Add custom translation
                  </Button>
                </div>
              );
              return (
                <code key={JSON.stringify(item)}>
                  <pre>
                    {JSON.stringify(translationsWithoutSourceLang, null, 4)}
                  </pre>
                </code>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
