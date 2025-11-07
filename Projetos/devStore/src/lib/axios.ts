import axios from "axios";

export const devStoreApi = axios.create({
  baseURL: import.meta.env.DEVSTORE_BASE_URL,
  timeout: 1000 * 60 * 0.8, // 48 segundos
});
