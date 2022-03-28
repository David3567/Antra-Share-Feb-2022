export class AppUserAuth {

  constructor(public name: string = "",
              public userName: string = "",
              public userEmail: string = "",
              public userRole: string = "",
              public bearerToken: string = "") { }
}


export interface DBUser {
  "name": string,
  "userName": string,
  "userEmail": string,
  "password": string,
  "userRole": "user",
  "age": number,
  "gender": string,
  "phone": number
}