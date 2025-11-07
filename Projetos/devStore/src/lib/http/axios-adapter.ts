import type { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";

import type {
  HttpClient,
  HttpErrorResponse,
  IHttpResponse,
} from "@/types/http-client";

export type AxiosErrorMap<T extends string = string> = AxiosError<
  Array<HttpErrorResponse<T>>
>;

export class AxiosAdapter implements HttpClient {
  constructor(protected api: AxiosInstance) {}

  async get<T = unknown, C extends AxiosRequestConfig = AxiosRequestConfig>(
    url: string,
    config?: C
  ): Promise<IHttpResponse<T, C>> {
    return this.api.get(url, config);
  }

  async post<
    T = unknown,
    D = unknown,
    C extends AxiosRequestConfig = AxiosRequestConfig
  >(url: string, data?: D, config?: C): Promise<IHttpResponse<T, C>> {
    return this.api.post(url, data, config);
  }

  async delete<T = unknown, C extends AxiosRequestConfig = AxiosRequestConfig>(
    url: string,
    config?: C
  ): Promise<IHttpResponse<T, C>> {
    return this.api.delete(url, config);
  }

  async put<
    T = unknown,
    D = unknown,
    C extends AxiosRequestConfig = AxiosRequestConfig
  >(url: string, data?: D, config?: C): Promise<IHttpResponse<T, C>> {
    return this.api.put(url, data, config);
  }

  async patch<
    T = unknown,
    D = unknown,
    C extends AxiosRequestConfig = AxiosRequestConfig
  >(url: string, data?: D, config?: C): Promise<IHttpResponse<T, C>> {
    return this.api.patch(url, data, config);
  }
}
