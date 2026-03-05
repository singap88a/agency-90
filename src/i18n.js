import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ar from './locales/ar.json';
import en from './locales/en.json';
import de from './locales/de.json';
import nl from './locales/nl.json';

const resources = {
  ar: { translation: ar },
  en: { translation: en },
  de: { translation: de },
  nl: { translation: nl },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'nl',
    fallbackLng: 'nl',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'queryString', 'navigator', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie'],
    }
  });

export default i18n;
