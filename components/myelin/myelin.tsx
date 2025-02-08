/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useListTranslationsQuery } from "./queries/use-list-translations-query";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMemo, useState } from "react";
import Link from "next/link";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedLoadingText } from "../animated-loading-text";

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

export const Myelin = ({ className }: { className?: string }) => {
  const [tab, setTab] = useState("common.json");

  const { data, isLoading } = useListTranslationsQuery({
    onSuccess: (data: any) => {
      if (!data?.nodeEnv) {
        setTab(data?.[0]?.fileName);
      }
    },
  });

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
          This is a developmental feature only. Sry
        </p>
      </div>
    );
  }
  return (
    <div className={cn(className, "relative")}>
      <div className="fixed top-0 w-full z-30 dark:bg-[rgb(9,10,11)]/75 bg-white/75 dark:bg-react/75 backdrop-blur-sm">
        <div className="flex items-center flex-row p-4 justify-between text-gray-500 ">
          <Link href="/">
            <XIcon />
          </Link>
          <Tabs
            defaultValue={tab}
            className="flex justify-center items-center"
            onValueChange={(value) => {
              setTab(value);
            }}
          >
            <TabsList className="space-x-4 rounded-full">
              {nameSpaces?.map((ns: string) => {
                return (
                  <TabsTrigger key={ns} value={ns}>
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

      <div className="mt-24">
        <code>
          <pre>{JSON.stringify(filteredTranslations, null, 4)}</pre>
        </code>
      </div>
    </div>
  );
};
