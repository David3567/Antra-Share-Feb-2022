import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  patients: { DOB: string, zipcode: number }[] = [
    {
      DOB: '2000-02-20',
      zipcode: 19112
    }
  ]

  constructor() { }

  checkUser(login: {DOB: string, zipcode: number}) {
    for (let i =0; i<this.patients.length; i++) {
      if(this.patients[i].zipcode === login.zipcode && login.DOB === this.patients[i].DOB) {
        return true
      }
    }

    return false;
  }
}
