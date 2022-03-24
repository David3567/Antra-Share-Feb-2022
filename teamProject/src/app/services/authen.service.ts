import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:4231/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(userName: string, userEmail: string, password: string, userRole: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/createNewAccount', {
      userName,
      userEmail,
      password,
      userRole
    }, httpOptions);
  }
}