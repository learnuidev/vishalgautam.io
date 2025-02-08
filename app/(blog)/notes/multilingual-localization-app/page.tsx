"use client";

import {
  CodeBlock,
  Header3,
  Header4,
  Paragraph,
  SectionContainer,
} from "@/components/blog/blog";
import { EntryBanner } from "../components/entry-banner";
import { multiLingualApp } from "../state/entries";

import { useTranslation } from "@/libs/i18n-next/use-translation";

export default function MultlingualLocalizationApp() {
  const { t } = useTranslation("multilingual_app");
  return (
    <div>
      <EntryBanner
        entryItem={{
          ...multiLingualApp,
          title: t("blog.title"),
          description: t("blog.description"),
        }}
      />

      <div>
        <Header3>{t("titleOne")}</Header3>

        <SectionContainer>
          <Header4>{t("stepOne.title")}</Header4>

          <Paragraph>{t("stepOne.paragraphOne")}</Paragraph>

          <CodeBlock codeBlock="npx create-next-app@latest" />
        </SectionContainer>

        <SectionContainer>
          <Header4>{t("stepTwo.title")}</Header4>

          <Paragraph>{t("stepTwo.paragraphOne")}</Paragraph>

          <CodeBlock codeBlock="npx shadcn@latest init" />
        </SectionContainer>
        <SectionContainer>
          <Header4>{t("stepThree.title")}</Header4>

          <Paragraph>{t("stepThree.paragraphOne")}</Paragraph>

          <CodeBlock
            title={"locales/en/common.json"}
            codeBlock={JSON.stringify(
              {
                title: "Welcome to the app",
              },
              null,
              4
            )}
          />
        </SectionContainer>
        <SectionContainer>
          <Header4>{t("stepFour.title")}</Header4>

          <Paragraph>{t("stepFour.paragraphOne")}</Paragraph>

          <CodeBlock codeBlock={`npx myelino add i18next`} />

          <Paragraph className="font-semibold underline">
            {t("stepFour.paragraphTwo")}
          </Paragraph>
          <Paragraph>{t("stepFour.paragraphThree")}</Paragraph>
          <Paragraph>{t("stepFour.paragraphFour")}</Paragraph>
        </SectionContainer>
        <SectionContainer>
          <Header4>{t("stepFive.title")}</Header4>

          <Paragraph>{t("stepFive.paragraphOne")}</Paragraph>

          <CodeBlock
            showCopyToClipboard={false}
            codeBlock={`export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <I18NextHtmlProvider>
      ...
    </I18NextHtmlProvider>
  );
}`}
          />
        </SectionContainer>

        <SectionContainer>
          <Header4>{t("stepSix.title")}</Header4>

          <Paragraph>{t("stepSix.paragraph")}</Paragraph>

          <CodeBlock codeBlock={`npx myelino upsert i18next.d.ts`} />
        </SectionContainer>
        <SectionContainer>
          <Header4>{t("stepSeven.title")}</Header4>

          <Paragraph>{t("stepSeven.paragraphOne")}</Paragraph>

          <CodeBlock
            showCopyToClipboard={false}
            codeBlock={`"use client";

import { Button } from "@/components/ui/button";
import { useTranslation } from "@/libs/i18n-next/use-translation";

export const Banner = () => {
  const { t } = useTranslation(["banner", "common"]);
  return (
    <section className="flex flex-col justify-center items-center mt-32">
      <h1 className="text-5xl font-bold">{t("title")}</h1>

      <p className="mt-4 text-xl font-mono">{t("description")}</p>

      <Button className="rounded-full mt-4">{t("cta")}</Button>
    </section>
  );
};`}
          />

          <Paragraph>{t("stepSeven.paragraphTwo")}</Paragraph>
          <Paragraph>{t("stepSeven.paragraphThree")}</Paragraph>
        </SectionContainer>

        <hr />

        <Header3 className="mt-16">{t("partTwo.title")}</Header3>

        <SectionContainer>
          <Header4>{t("partTwo.intro")}</Header4>

          <Paragraph>{t("partTwo.intro.paragraphOne")}</Paragraph>
          <Paragraph>{t("partTwo.intro.paragraphTwo")}</Paragraph>

          <CodeBlock codeBlock="npx myelino" />

          <Paragraph>{t("partTwo.intro.paragraphThree")}</Paragraph>
          <Paragraph>{t("partTwo.intro.paragraphFour")}</Paragraph>
        </SectionContainer>

        <SectionContainer>
          <Header4>{t("partTwo.translate.title")}</Header4>

          <Paragraph>{t("partTwo.translate.paragraphOne")}</Paragraph>

          <CodeBlock codeBlock="npx myelino translate" />

          <Paragraph className="mb-12">
            {t("partTwo.translate.paragraphTwo")}
          </Paragraph>
          <Paragraph className="">
            {t("partTwo.translate.paragraphThree")}
          </Paragraph>

          <Paragraph className="mt-12">{t("partTwo.translate.note")}</Paragraph>

          <CodeBlock codeBlock="npx shadcn@latest add dropdown-menu button" />
        </SectionContainer>

        <Paragraph className="">{t("conclusion")}</Paragraph>
      </div>
    </div>
  );
}
