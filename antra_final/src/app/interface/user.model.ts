import { AddressLink } from "./address.model";
import { CompanyLink } from "./company.model";


export interface User {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: AddressLink;
    phone: string;
    website: string;
    company: CompanyLink;
  }