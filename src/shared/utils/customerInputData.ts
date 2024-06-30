import {
  ICustomerPassportData,
  IIndividualCustomer,
  INaturalCustomer,
} from "../types/customerDataTypes";

export const naturalCustomerInputData: INaturalCustomer[] = [
  { width: 375, label: "ФИО" },
  { width: 506, label: "Адрес регистрации" },
  { width: 243, label: "ИНН" },
  { width: 375, label: "E-Mail" },
  { width: 243, label: "Телефон" },
  { width: 243, label: "Соцсети" },
];

export const IndividualCustomerInputData: IIndividualCustomer[] = [
  { label: "Наименование предприятия", width: 375 },
  { label: "Директор", width: 375 },
  { label: "Юридический адрес", width: 506 },
  { label: "E-mail", width: 375 },
  { label: "Телефон", width: 243 },
];

export const customerInputPassportData: ICustomerPassportData[] = [
  { width: 243, label: "Серия", type: "text" },
  { width: 506, label: "Номер", type: "text" },
  { width: 243, label: "Выдан", type: "text" },
  { width: 243, label: " ", type: "date" },
  { width: 243, label: "Адрес регистрации", type: "text" },
];
