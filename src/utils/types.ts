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
  secondaryBackground: string;
  surface: string;
  accent: string;
  text: {
    primary: string;
    secondary: string;
    ternary?: string;
  };
  status: {
    success: string;
    error: string;
  };
  border: string;
  divider: string;
};

export type TopBarScheme = {
  background: string;
  textColor: string;
};

export type ThemeType = {
  topBar: TopBarScheme;
  colors: ColorScheme;
  inProgress: {
    background: string;
    textColor: string;
  };
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
      xl: number;
    };
    fontFamily: {
      regular: string;
      medium: string;
      semiBold: string;
      bold: string;
    };
  };
};

export enum Institutie {
  CurteadeApelALBAIULIA = "CurteadeApelALBAIULIA",
  // Add other institutions as needed
}

export type Dosar = {
  numar: string;
  numarVechi?: string;
  data: Date;
  institutie: Institutie;
  departament: string;
  parti: DosarParte[];
  sedinte: DosarSedinta[];
  caiAtac: DosarCaleAtac[];
};

export type DosarParte = {
  nume: string;
  calitateParte: string;
};

export type DosarSedinta = {
  complet: string;
  data: Date;
  ora: string;
  solutie?: string;
  solutieSumar?: string;
  dataPronuntare?: Date;
  numarDocument?: string;
  dataDocument?: Date;
};

export type DosarCaleAtac = {
  dataDeclarare: Date;
  parteDeclaratoare: string;
  tipCaleAtac: string;
};

export type Sedinta = {
  departament: string;
  complet: string;
  data: Date;
  ora: string;
  dosareSedinta: DosarSedinta[];
};
