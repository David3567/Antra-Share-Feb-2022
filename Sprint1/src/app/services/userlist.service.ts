import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../admin/interface/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  private baseUrl = 'http://localhost:3000';
  private path = 'users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('/'));
  }

  addUsers(user: User) {
    return this.http.post([this.baseUrl, this.path].join('/'), user);
  }

  deleteUser(id: number){
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}
