"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  DATE_LOCALES,
  isLanguage,
  translations,
  type Language,
  type SiteTranslation,
} from "@/lib/translations";

const LANGUAGE_STORAGE_KEY = "ukmac-language";

type LanguageContextValue = {
  language: Language;
  locale: string;
  copy: SiteTranslation;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    let savedLanguage: string | null = null;

    try {
      savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    } catch {
      return;
    }

    if (!isLanguage(savedLanguage)) return;

    const timer = window.setTimeout(() => setLanguageState(savedLanguage), 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language switching still works when browser storage is unavailable.
    }
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((current) => (current === "en" ? "km" : "en"));
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      locale: DATE_LOCALES[language],
      copy: translations[language],
      setLanguage,
      toggleLanguage,
    }),
    [language, setLanguage, toggleLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider.");
  }

  return context;
}
