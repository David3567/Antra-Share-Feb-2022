export interface Users {
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
