import { AxiosHeaders } from "axios";
import {
  Dosar,
  HttpClientOptions,
  Institutie,
  Sedinta,
} from "../../utils/types";
import { HttpClient } from "../http-client";
import { API_CONFIG } from "./config";

export class PortalJustService {
  private static instance: PortalJustService;
  private httpClient: HttpClient;

  private constructor() {
    const options: HttpClientOptions = {
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      retries: 3,
      headers: new AxiosHeaders({
        "Content-Type": "text/xml;charset=UTF-8",
        SOAPAction: "http://portalquery.just.ro/",
      }),
    };

    this.httpClient = new HttpClient(options);
  }

  public static getInstance(): PortalJustService {
    if (!PortalJustService.instance) {
      PortalJustService.instance = new PortalJustService();
    }
    return PortalJustService.instance;
  }

  searchDosare = async (params: {
    numarDosar?: string;
    obiectDosar?: string;
    numeParte?: string;
    institutie?: Institutie;
    dataStart?: Date;
    dataStop?: Date;
  }): Promise<Dosar[]> => {
    try {
      const soapBody = this.buildSearchDosareSoapBody(params);
      const response = await this.httpClient.sendRequest<any>({
        method: "POST",
        data: soapBody,
      });

      return this.parseDosareResponse(response);
    } catch (error) {
      console.error("Error searching dosare:", error);
      throw this.handleApiError(error);
    }
  };

  searchSedinte = async (
    data: Date,
    institutie: Institutie,
  ): Promise<Sedinta[]> => {
    try {
      const soapBody = this.buildSearchSedinteSoapBody(data, institutie);
      const response = await this.httpClient.sendRequest<any>({
        method: "POST",
        data: soapBody,
      });

      return this.parseSedinteResponse(response);
    } catch (error) {
      console.error("Error searching sedinte:", error);
      throw this.handleApiError(error);
    }
  };

  private buildSearchDosareSoapBody = (params: any): string => {
    return `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                     xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
                     xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <CautareDosare xmlns="http://portalquery.just.ro/">
            <numarDosar>${params.numarDosar || ""}</numarDosar>
            <obiectDosar>${params.obiectDosar || ""}</obiectDosar>
            <numeParte>${params.numeParte || ""}</numeParte>
            <institutie>${params.institutie || ""}</institutie>
            <dataStart>${params.dataStart ? this.formatDate(params.dataStart) : ""}</dataStart>
            <dataStop>${params.dataStop ? this.formatDate(params.dataStop) : ""}</dataStop>
          </CautareDosare>
        </soap:Body>
      </soap:Envelope>`;
  };

  private buildSearchSedinteSoapBody = (
    data: Date,
    institutie: Institutie,
  ): string => {
    return `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                     xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
                     xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <CautareSedinte xmlns="http://portalquery.just.ro/">
            <dataSedinta>${this.formatDate(data)}</dataSedinta>
            <institutie>${institutie}</institutie>
          </CautareSedinte>
        </soap:Body>
      </soap:Envelope>`;
  };

  private formatDate = (date: Date): string => {
    return date.toISOString();
  };

  private parseDosareResponse = (response: any): Dosar[] => {
    // to add XML parsing logic here based on the SOAP response
    // will  use a XML parser library
    return [];
  };

  private parseSedinteResponse = (response: any): Sedinta[] => {
    // to add XML parsing logic here based on the SOAP response
    return [];
  };

  private handleApiError = (error: any): Error => {
    // to add specific error handling based on SOAP response codes
    if (error.response) {
      return new Error(
        `API Error: ${error.response.status} - ${error.response.statusText}`,
      );
    }
    return error;
  };
}
