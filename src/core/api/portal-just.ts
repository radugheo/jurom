import { Dosar, Institutie, Sedinta } from "../../utils/types";
import { HttpClient } from "../http-client";
import { API_CONFIG } from "./config";

export class PortalJustService {
  private static instance: PortalJustService;
  private httpClient: HttpClient;

  private constructor() {
    this.httpClient = new HttpClient({ retries: 3 });
  }

  public static getInstance(): PortalJustService {
    if (!PortalJustService.instance) {
      PortalJustService.instance = new PortalJustService();
    }
    return PortalJustService.instance;
  }

  searchDosare = async (searchValue: string): Promise<Dosar[]> => {
    try {
      const params = this.determineSearchParams(searchValue);
      const soapBody = this.buildSearchDosareSoapBody(params);

      console.log(`Request body: ${soapBody}`);

      const response = await this.httpClient.sendRequest<any>({
        url: `${API_CONFIG.BASE_URL}?op=CautareDosare`,
        method: `POST`,
        data: soapBody,
        headers: {
          SOAPAction: `portalquery.just.ro/CautareDosare`,
          "Content-Type": `text/xml; charset=utf-8`,
        },
      });
      console.log(`Response: ${response}`);
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

  private determineSearchParams = (searchValue: string) => {
    const cleanValue = searchValue.trim().replace(/\s+/g, " ");

    if (/^\d+\/\d+\/\d+$/.test(cleanValue)) {
      return { numarDosar: cleanValue };
    }

    if (/^\d{1,2}[-.\/]\d{1,2}[-.\/]\d{4}$/.test(cleanValue)) {
      const date = new Date(cleanValue);
      if (!isNaN(date.getTime())) {
        return { dataStart: date };
      }
    }

    return { numeParte: cleanValue };
  };

  private buildSearchDosareSoapBody = (params: any): string => {
    let xmlElement = "";

    if (params.numarDosar) {
      xmlElement = `<numarDosar>${params.numarDosar}</numarDosar>`;
    } else if (params.numeParte) {
      xmlElement = `<numeParte>${params.numeParte}</numeParte>`;
    } else if (params.dataStart) {
      xmlElement = `<dataStart>${this.formatDate(params.dataStart)}</dataStart>`;
    }

    return `<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
                     xmlns:xsd="http://www.w3.org/2001/XMLSchema" 
                     xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
        <soap:Body>
          <CautareDosare xmlns="portalquery.just.ro">
            ${xmlElement}
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
