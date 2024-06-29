/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROJECT_ID: string;
  readonly VITE_ENDPOINT: string;
  readonly VITE_DATABASE_ID: string;
  readonly VITE_COLLECTION_ID_POSTS: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
