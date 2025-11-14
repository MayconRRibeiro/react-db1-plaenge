/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly DEVSTORE_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
