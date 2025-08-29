import i18next, { type InitOptions } from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resourceToBackend from 'i18next-resources-to-backend';
import { initReactI18next, useTranslation as useTranslationReact } from 'react-i18next';
import { useParams } from '@tanstack/react-router';
import { isServer } from '../utils';
import type { I18nLang, NSType } from './types/i18n.types';

export const I18N_SUPPORTED_LANGUAGES = ['en', 'ko'] as const;
export const DEFAULT_NS: NSType = 'common' as const;
export const LANGUAGE_COOKIE_NAME = 'language' as const;

export const getFallbackI18nLang = (): I18nLang => {
  const fallbackLang = import.meta.env.VITE_DEFAULT_FALLBACK_LANG;
  if (!isSupportedLanguage(fallbackLang)) throw new Error(`Invalid fallback language: ${fallbackLang}`);
  return fallbackLang as I18nLang;
};

export const isSupportedLanguage = (lang: string): lang is I18nLang => {
  return I18N_SUPPORTED_LANGUAGES.includes(lang as I18nLang);
};

const getOptions = (lng: I18nLang = getFallbackI18nLang(), ns: NSType = DEFAULT_NS): InitOptions => {
  return {
    supportedLngs: I18N_SUPPORTED_LANGUAGES,
    lng,
    ns,
    defaultNS: DEFAULT_NS,
    fallbackLng: getFallbackI18nLang(),
    interpolation: {
      escapeValue: false,
    },
  };
};

export const i18nInstance = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(resourceToBackend((lang: I18nLang, ns: NSType) => import(`./locale/${lang}/${ns}.json`)))
  .init({
    ...getOptions(),
    lng: undefined,
    detection: {
      order: ['path', 'htmlTag', 'cookie', 'navigator'],
    },
    preload: isServer ? I18N_SUPPORTED_LANGUAGES : [],
  });

export const useTranslation = <N extends NSType>(ns: N | N[], lng?: I18nLang, options?: object) => {
  const original = useTranslationReact<N | N[]>(ns, options);
  const { i18n } = original;

  const { lang: langParam } = useParams({ from: '/{-$lang}/' });
  const lang = lng ?? langParam;

  if (isServer && lang && i18n.resolvedLanguage !== lang) {
    i18n.changeLanguage(lang);
  }

  return original;
};
