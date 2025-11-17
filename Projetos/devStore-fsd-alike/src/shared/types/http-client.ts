import type { HttpStatusCode, AxiosRequestConfig } from "axios";

export type IHttpResponse<T = unknown, D = unknown> = {
  data: T;
  status: HttpStatusCode;
  statusText: string;
  headers: Record<string, string>;
  config: D;
};

type HttpMethod = <
  T = unknown,
  C extends AxiosRequestConfig = AxiosRequestConfig
>(
  url: string,
  config?: C
) => Promise<IHttpResponse<T, C>>;
type HttpMethodMutate = <
  T = unknown,
  D = unknown,
  C extends AxiosRequestConfig = AxiosRequestConfig
>(
  url: string,
  data?: D,
  config?: C
) => Promise<IHttpResponse<T, C>>;

export interface HttpClient {
  get: HttpMethod;
  post: HttpMethodMutate;
  delete: HttpMethod;
  put: HttpMethodMutate;
  patch: HttpMethodMutate;
}

export interface HttpErrorResponse<T extends string = string> {
  code: T;
  message: string;
}
