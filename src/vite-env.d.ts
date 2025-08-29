/// <reference types="vite/client" />

interface ViteTypeOptions {
  strictImportEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_DEFAULT_FALLBACK_LANG: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
