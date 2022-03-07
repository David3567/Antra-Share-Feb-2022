import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})

export class UserlistService {
  private baseUrl = 'http://localhost:3000';
  private path = 'users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<any>([this.baseUrl, this.path].join('/'));
  }

  deleteUser(id:number) {
    return this.http.delete([this.baseUrl, this.path, id].join('/'));
  }
}