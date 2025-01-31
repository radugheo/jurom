import { HttpErrorResponse, HttpErrorStatus } from "../utils/types";

export class HttpError extends Error {
  readonly name = "HttpError";

  readonly status: HttpErrorStatus;

  readonly data: string;

  readonly url: string;

  constructor(
    status: HttpErrorStatus,
    message: string,
    url: string,
    data?: unknown,
  ) {
    super(message);
    this.status = status;
    this.data = typeof data === "string" ? data : JSON.stringify(data);
    this.url = url;
  }

  toJSON(): HttpErrorResponse {
    return {
      message: this.message,
      statusCode: this.status,
      data: this.data,
      url: this.url,
    };
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }
}
