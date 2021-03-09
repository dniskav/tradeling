import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV !== 'production',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    lowerCaseLng: true,
    react: {
      wait: true,
      useSuspense: false,
    },
    detection: {
      order: ['htmlTag'],
    },
  });


export default i18next;