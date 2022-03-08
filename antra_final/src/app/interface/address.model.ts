import { GeoLink } from "./geo.model";

export interface AddressLink {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: GeoLink;
  }