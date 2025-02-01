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

export type ColorScheme = {
  background: string;
  surface: string;
  accent: string;
  text: {
    primary: string;
    secondary: string;
  };
  status: {
    success: string;
    error: string;
  };
  border: string;
};

export type ThemeType = {
  colors: ColorScheme;
  spacing: {
    sm: number;
    md: number;
    lg: number;
  };
  typography: {
    fontSize: {
      sm: number;
      md: number;
      lg: number;
    };
    fontFamily: {
      regular: string;
      bold: string;
    };
  };
};
