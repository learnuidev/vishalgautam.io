import { FormatFunction } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";

export const languagesList = {
  en: {
    language: "English (UK)",
  },
  "en-US": {
    language: "English (US)",
  },
  zh: {
    language: "Chinese (Mainland)",
  },
  "zh-TW": {
    language: "Chinese (Taiwan)",
  },
  es: {
    language: "Spanish",
  },
  fr: {
    language: "French",
  },
  ko: {
    language: "Korean",
  },
  ro: {
    language: "Romanian",
  },
  ur: {
    language: "Urdu",
  },
  hi: {
    language: "Hindi",
  },
  fa: {
    language: "Farsi",
  },
  ar: {
    language: "Arabic",
  },
  ru: {
    language: "Russian",
  },

  // Add your supported locales here
} as const;

export type Language = keyof typeof languagesList;

export const i18nConfig = {
  cookieName: "I18N_COOKIE",
  fallbackLanguage: "en",
  defaultNamespace: "common",
  languages: Object.keys(languagesList) as Language[],
};

const customFormat: FormatFunction = (value, format) => {
  if (format === "capitalize") {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
  return value;
};

export const i18nOptions = {
  // debug: true,
  supportedLngs: i18nConfig.languages,
  fallbackLng: i18nConfig.fallbackLanguage,
  lng: i18nConfig.fallbackLanguage,
  fallbackNS: i18nConfig.defaultNamespace,
  defaultNS: i18nConfig.defaultNamespace,
  ns: [i18nConfig.defaultNamespace],
  interpolation: {
    escapeValue: false, // React already does escaping
    format: customFormat,
    skipOnVariables: false,
  },

  backend: {
    backends: [
      resourcesToBackend(
        (lng: string, ns: string) => import(`/locales/${lng}/${ns}.json`)
      ),
    ],
    backendOptions: [],
  },
};
