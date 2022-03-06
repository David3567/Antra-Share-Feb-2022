import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  private baseUrl = 'localhost:3000';
  private path = 'users';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('/'));
  }

}
