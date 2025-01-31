import { AxiosHeaders } from "axios";

export type HttpClientOptions = {
  retries: number;
  headers?: AxiosHeaders;
  timeout?: number;
  baseURL?: string;
};
export type HttpErrorStatus = string | number | undefined;
export type HttpErrorResponse = {
  message: string;
  statusCode: HttpErrorStatus;
  data: string;
  url: string;
};

export interface BaseProps {
  isDarkMode?: boolean;
}
