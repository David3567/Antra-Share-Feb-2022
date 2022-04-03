

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

  export interface AddressLink {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLink;
  }

  export interface CompanyLink {
    name: string;
    catchPhrase: string;
    bs: string;
  }

  export interface GeoLink {
    lat: string;
    lng: string;
  }