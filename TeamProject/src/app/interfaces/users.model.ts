export interface usersTemplate {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
    password: string;
    gender: string;
    age: string;
  }
  
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  }
  
  interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }

export class AppUser {
    userEmail = '';
    password = '';
}
