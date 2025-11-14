import pluginQuery from "@tanstack/eslint-plugin-query";

export default {
  plugins: {
    "@tanstack/query": pluginQuery,
  },
  rules: {
    ...pluginQuery.configs.recommended.rules,
  },
};
