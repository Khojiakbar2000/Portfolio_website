import { en } from "./en";
import { ko } from "./ko";

export const translations = {
  en,
  ko
};

export const getTranslation = (lang, key) => {
  const keys = key.split(".");
  let value = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};

