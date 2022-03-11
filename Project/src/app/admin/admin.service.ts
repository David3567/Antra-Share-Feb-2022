import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces';

@Injectable()
export class AdminService {
  private baseUrl = "http://localhost:3000";
  private path = "users";
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get([this.baseUrl,this.path].join('/')) as Observable<
    User[]
    >;
  }
  // addUsers(newtodo: User) {
  //   return this.http.post([this.baseUrl, this.path].join('/'), newuser) as Observable<
  //     User
  //   >;
  //   // fetch(url, body)
  // }
}
