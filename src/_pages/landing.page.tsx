import { LanguageSelecter, useTranslation } from '@/shared/i18n';

export function LandingPage() {
  const { t } = useTranslation(['user', 'common']);

  return (
    <div className='p-4'>
      <LanguageSelecter />
      <div>
        <p>{t('common:key1')}</p>
        <p>{t('user:userKey2')}</p>
      </div>
    </div>
  );
}
