import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userDB: User[] = [
    { name: 'Jeff Deloach', birthdate: '1950-08-15', zipcode: '94103' },
    { name: 'Carrie Lester', birthdate: '2001-12-25', zipcode: '33619' },
    { name: 'Lawrence Stevens', birthdate: '1971-12-19', zipcode: '01610' },
    { name: 'Floyd Hart', birthdate: '1966-07-09', zipcode: '64866' },
    { name: 'Jerry Carico', birthdate: '1938-03-16', zipcode: '48075' },
    { birthdate: '1996-12-12', zipcode: '10032' },
    { birthdate: '2022-05-02', zipcode: '1' }
  ]

  constructor() { }

  getUsers() {
    return this.userDB;
  }
}
