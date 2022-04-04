import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private username$ = new BehaviorSubject('Guest');

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>("http://localhost:3000/users");
  }

  getProfile(username: string) {
    return this.http.get<any>(['http://localhost:4231/api/users/getProfile', username].join('/'));
  }

  setUserName(username: string) {
    this.username$.next(username);
  }

  getUserName() {
    return this.username$;
  }
}
