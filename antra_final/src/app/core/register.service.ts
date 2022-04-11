import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url = 'http://localhost:4231/api/register';
  private checkUsername = 'checkExistByUsername';
  private checkEmail = 'checkExistByEmail';


  constructor(private http: HttpClient) { }

  getUsername(username: string) {

    return this.http.get([this.url, this.checkUsername, username].join('/'));
  }

  getEmail(email: string) {
    return this.http.get([this.url, this.checkEmail, email].join('/'));
  }
}

