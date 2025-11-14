import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import pluginQuery from "./packages/eslint/eslint-plugin-query.mjs";
import defaultRules from "./packages/eslint/eslint-default-rules.mjs";
import reactHooks from "./packages/eslint/eslint-plugin-react-hooks.mjs";
import pluginReactRefresh from "./packages/eslint/eslint-plugin-react-refresh.mjs";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      defaultRules,
      pluginQuery,
      reactHooks,
      pluginReactRefresh,
      tseslint.configs.recommended,
    ],
    rules: {
      "react-refresh/only-export-components": "off",
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
]);
