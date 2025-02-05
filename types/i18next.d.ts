import { i18nOptions } from "@/libs/i18n-next/i18n-config";

import common from "@/locales/en/common.json";
import navbar from "@/locales/en/navbar.json";
import notes from "@/locales/en/notes.json";
import projects from "@/locales/en/projects.json";
import withWithMe from "@/locales/en/withWithMe.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof i18nOptions.defaultNS;
    resources: {
      common: typeof common;
      navbar: typeof navbar;
      notes: typeof notes;
      projects: typeof projects;
      withWithMe: typeof withWithMe;
    };
  }
}

