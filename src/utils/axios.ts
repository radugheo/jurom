import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import axiosRetry, { exponentialDelay } from "axios-retry";
import { HttpClientOptions } from "./types";
import { HttpError } from "../core/http-error";

type RetryHandler = (
  maxRetries: number,
) => (
  retryCount: number,
  error: AxiosError,
  requestConfig: AxiosRequestConfig,
) => void;

const urlFromParams = (parameters: AxiosRequestConfig): string => {
  const url = new URL(parameters.url!);
  return `${url.host}${url.pathname}`;
};

const getErrorResponse = (error: AxiosError, url: string): HttpError => {
  const status = error.response
    ? error.response.status
    : (error.status ?? error.code);
  return new HttpError(status, error.message, url, error.response?.data);
};

const retryHandler: RetryHandler =
  (maxRetries) => (retryCount, error, requestConfig) => {
    if (retryCount >= maxRetries) {
      console.warn(
        `Request failed after ${retryCount} retries with ${error.message}`,
      );
      throw getErrorResponse(error, urlFromParams(requestConfig));
    }
  };

const addAxiosRetry = (
  client: AxiosInstance,
  retries: number,
): AxiosInstance => {
  axiosRetry(client, {
    retries,
    retryDelay: exponentialDelay,
    shouldResetTimeout: true,
    retryCondition: () => true,
    onRetry: retryHandler(retries),
  });
  return client;
};

export const getAxiosClient = (config?: HttpClientOptions): AxiosInstance => {
  const client = config ? axios.create(config) : axios.create();

  const maxRetries = config?.retries ?? 3;

  return maxRetries > 0 ? addAxiosRetry(client, maxRetries) : client;
};
