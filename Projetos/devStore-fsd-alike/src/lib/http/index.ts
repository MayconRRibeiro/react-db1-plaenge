import type { HttpClient } from "@/types/http-client";
import { devStoreApi } from "../axios";
import { AxiosAdapter } from "./axios-adapter";

export const httpClient = new AxiosAdapter(devStoreApi);

export abstract class HttpService {
  constructor(protected readonly http: HttpClient = httpClient) {}
}

// ProdutosService extends HttpService
// -- use this.http
// httpClient (instancia do AxiosAdapter)
// -- implementa HttpClient
// AxiosAdapter
// -- use internamente
// devStoreApi (instancia do Axios)
// -- faz requisicoes
// API Backend
