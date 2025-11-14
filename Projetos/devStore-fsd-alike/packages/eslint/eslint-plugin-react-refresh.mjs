import reactRefresh from "eslint-plugin-react-refresh";

export default {
  plugins: {
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactRefresh.configs.vite.rules,
  },
};
