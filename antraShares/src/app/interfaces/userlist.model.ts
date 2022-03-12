export interface Users {
  // id: number;
  // name: string;
  // username: string;
  // email: string;
  // address: {
  //   street: string;
  //   suite: string;
  //   city: string;
  //   zipcode: number;
  //   geo: {
  //     lat: number;
  //     lng: number;
  //   };
  // };
  // phone: string;
  // website: string;
  // company: {
  //   name: string;
  //   catchPhrase: string;
  //   bs: string;
  // };
  id?: number;
  name: string;
  userName: string;
  userEmail: string;
  password: string;
  userRole: {
    role: string;
    require: boolean;
  };
  age: number;
  gender: string;
  phone: number;
  avata: string;
}
