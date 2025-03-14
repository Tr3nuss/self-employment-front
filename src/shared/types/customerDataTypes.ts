import { IProfilePassportData } from "./profileData";

export interface INaturalCustomer {
  label: string;
  width: string | number;
}

export interface IIndividualCustomer {
  label: string;
  width: string | number;
}

export interface ISocietyCustomer {
  label: string;
  width: string | number;
}

export interface ICustomerPassportData {
  label: string;
  type: string;
  width: string | number;
}
