import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import common from "@/locales/en/common.json";
import home from "@/locales/en/home.json";
import langs from "@/locales/en/langs.json";
import multilingual_app from "@/locales/en/multilingual_app.json";
import myelin from "@/locales/en/myelin.json";
import navbar from "@/locales/en/navbar.json";
import notes from "@/locales/en/notes.json";
import projects from "@/locales/en/projects.json";
import subscriptionForm from "@/locales/en/subscriptionForm.json";
import withWithMe from "@/locales/en/withWithMe.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      common: typeof common;
      home: typeof home;
      langs: typeof langs;
      multilingual_app: typeof multilingual_app;
      myelin: typeof myelin;
      navbar: typeof navbar;
      notes: typeof notes;
      projects: typeof projects;
      subscriptionForm: typeof subscriptionForm;
      withWithMe: typeof withWithMe;
    };
  }
}

