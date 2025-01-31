import { AxiosInstance, AxiosRequestConfig } from "axios";
import { getAxiosClient } from "../utils/axios";
import { HttpClientOptions } from "../utils/types";

export class HttpClient {
  private client: AxiosInstance;

  constructor(config?: HttpClientOptions) {
    this.client = getAxiosClient(config);
  }

  async sendRequest<T>(parameters: AxiosRequestConfig): Promise<T> {
    const response = await this.client<T>(parameters);
    return response.data;
  }
}
