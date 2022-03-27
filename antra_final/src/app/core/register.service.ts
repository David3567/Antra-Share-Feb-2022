import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:4231/api/register/checkExistByUsername';

  constructor(private http: HttpClient) { }

  getUsername(username: string) {
    return this.http.get([this.url, username].join('/:'));
  }

  getEmail(email: string) {
    return this.http.get([this.url, email].join('/'));
  }
}