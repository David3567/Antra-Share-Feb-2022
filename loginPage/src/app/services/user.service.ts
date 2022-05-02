import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private userDB = [
    // { name: 'Jeff Deloach', birthdate: '08/15/1950', zipcode: '94103' },
    // { name: 'Carrie Lester', birthdate: '12/25/2001', zipcode: '33619' },
    // { name: 'Lawrence Stevens', birthdate: '12/19/1971', zipcode: '01610' },
    // { name: 'Floyd Hart', birthdate: '07/09/1966', zipcode: '64866' },
    // { name: 'Jerry Carico', birthdate: '03/16/1938', zipcode: '48075' },
    { birthdate: '12/12/1996', zipcode: '10032' },
    { birthdate: '1', zipcode: '1' }
  ]

  getUser() {
    return this.userDB;
  }
}
