import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService {
  private register = 'register';
  private checkUsername = 'checkExistByUsername';
  private checkEmail = 'checkExistByEmail';
  private baseUrl = 'https://localhost:4231/api';
  constructor(private http:HttpClient) { }

  checkUserExist(username: string){
    return this.http.get(
      [this.baseUrl, this.register, this.checkUsername, username].join('/')
    );
  }

  checkEmailExist(email: string){
    return this.http.get(
      [this.baseUrl, this.register, this.checkEmail, email].join('/')
    );
  }
}
