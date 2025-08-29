import commonEn from '../locale/en/common.json';
import userEn from '../locale/en/user.json';
import type { I18N_SUPPORTED_LANGUAGES } from '../i18n';

export type I18nLang = (typeof I18N_SUPPORTED_LANGUAGES)[number];

export type NSType = keyof I18nNameSpaces;

export interface I18nNameSpaces {
  common: typeof commonEn;
  user: typeof userEn;
}
