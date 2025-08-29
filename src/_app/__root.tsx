import * as React from 'react';
import {
  DEFAULT_NS,
  getFallbackI18nLang,
  isSupportedLanguage,
  LANGUAGE_COOKIE_NAME,
  useTranslation,
} from '@/shared/i18n';
import type { I18nLang } from '@/shared/i18n/types';
import { TanstackDevtools } from '@tanstack/react-devtools';
import { QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools';
import { HeadContent, Outlet, Scripts, createRootRouteWithContext, redirect } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';

import { createServerFn } from '@tanstack/react-start';
import { getHeader, setCookie } from '@tanstack/react-start/server';
import appCss from '../shared/styles/globals.css?url';

export const getLanguageCookie = createServerFn({ method: 'GET' }).handler<I18nLang | undefined>(async () => {
  const cookie = getHeader('Cookie');
  const language = cookie
    ?.split('; ')
    .find((c) => c.startsWith(`${LANGUAGE_COOKIE_NAME}=`))
    ?.split('=')[1];

  return language && isSupportedLanguage(language) ? language : undefined;
});

export const setLanguageCookie = createServerFn({ method: 'POST' })
  .validator((data: string): I18nLang => {
    if (typeof data !== 'string' || !isSupportedLanguage(data)) throw new Error('Invalid language');
    return data as I18nLang;
  })
  .handler(async (ctx) => {
    setCookie(LANGUAGE_COOKIE_NAME, ctx.data);
  });

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start',
      },
    ],
    links: [{ rel: 'stylesheet', href: appCss }],
  }),
  component: RootComponent,
  beforeLoad: async ({ params }) => {
    const _language = await getLanguageCookie();
    // 쿠키에 저장된 언어가 없으면 기본 언어로 쿠키에 저장
    if (!_language) await setLanguageCookie({ data: getFallbackI18nLang() });
    const language = _language ?? getFallbackI18nLang();
    // 파라미터에 lang이 없거나 지원하지 않는 언어면 기본 언어로 리다이렉트
    if (!('lang' in params) || typeof params.lang !== 'string' || !isSupportedLanguage(params.lang))
      throw redirect({ to: '.', params: { lang: language } });
    // 쿠키에 저장된 언어와 파라미터의 언어가 다르면 쿠키에 저장
    if (language !== params.lang) await setLanguageCookie({ data: params.lang });
  },
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
      {import.meta.env.DEV && (
        <TanstackDevtools
          config={{
            position: 'bottom-left',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            {
              name: 'React Query',
              render: <ReactQueryDevtoolsPanel />,
            },
          ]}
        />
      )}
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: React.ReactNode }>) {
  const { i18n } = useTranslation(DEFAULT_NS);

  return (
    <html lang={i18n.resolvedLanguage}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
