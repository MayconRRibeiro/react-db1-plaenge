import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

import defaultRules from "./packages/eslint/eslint-default-rules.mjs";
import pluginQuery from "./packages/eslint/eslint-plugin-query.mjs";
import pluginReactHooks from "./packages/eslint/eslint-plugin-react-hooks.mjs";
import pluginReactRefresh from "./packages/eslint/eslint-plugin-react-refresh.mjs";
import pluginBoundaries from "./packages/eslint/eslint-plugin-boundaries.mjs";

export default defineConfig(
  globalIgnores(["dist"]),

  {
    extends: [
      defaultRules,
      ...tseslint.configs.recommended,
      pluginQuery,
      pluginReactHooks,
      pluginReactRefresh,
      pluginBoundaries,
    ],
    rules: {
      "react-refresh/only-export-components": "off",
    },
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: "latest",
      sourceType: "module",
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  {
    files: ["api/**/*/*.js"],
    languageOptions: {
      globals: globals.node,
      ecmaVersion: "latest",
      sourceType: "module",
    },
  }
);
