import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../admin/models/user.model';
import { CreateUser } from '../login/models/createUser';

@Injectable({
  providedIn: 'root'
})

export class apiService {

  private url = 'http://localhost:4231/api';
  private create = 'register/createNewAccount';
  private all = 'users/getAllUsers'
  private findOne = 'users/getProfile'

  constructor(private http: HttpClient) {
    
  }

  getUsers() {
    return this.http.get<CreateUser>([this.url, this.all].join('/'));
  }

  getOneUser(username: string) {
    return this.http.get<CreateUser>([this.url, this.findOne, username].join('/'))
  }

  createUser(userInfo: CreateUser) {
    return this.http.post([this.url, this.create].join('/'), userInfo) as Observable<CreateUser>
  }
}
