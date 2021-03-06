import i18n from "i18next";

import { initReactI18next } from "react-i18next";

import { EN, DE } from "./locales";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: EN
    },

    de: {
      translation: DE
    }
  },

  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
