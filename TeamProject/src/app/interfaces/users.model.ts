export interface usersTemplate {
    _id: string;
    name: string;
    userName: string;
    userEmail: string;
    password: string;
    userRole: string;
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

export class AppNewUser {
  userName = '';
  userEmail = '';
  password = '';
}
