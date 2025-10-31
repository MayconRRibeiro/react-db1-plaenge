/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEVSTORE_BASE_URL: string;
  readonly DEVSTORE_ADMIN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
