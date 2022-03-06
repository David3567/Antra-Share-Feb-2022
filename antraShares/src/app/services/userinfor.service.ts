import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserinforService {
  private baseUrl = 'http://localhost:3000';
  private path = 'users';
  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('/'));
  }
}
