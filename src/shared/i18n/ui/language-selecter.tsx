import { useNavigate } from '@tanstack/react-router';
import { DEFAULT_NS, I18N_SUPPORTED_LANGUAGES, useTranslation } from '../i18n';
import type { I18nLang } from '../types';

export function LanguageSelecter() {
  const { i18n } = useTranslation(DEFAULT_NS);
  const navigate = useNavigate();

  const handleChangeLanguage = (newLang: I18nLang) => {
    i18n.changeLanguage(newLang);

    navigate({
      to: '.',
      params: { lang: newLang },
    });
  };

  return (
    <select defaultValue={i18n.resolvedLanguage} onChange={(e) => handleChangeLanguage(e.target.value as I18nLang)}>
      {I18N_SUPPORTED_LANGUAGES.map((lang) => (
        <option key={lang} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
}
