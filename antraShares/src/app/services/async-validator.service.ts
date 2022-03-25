import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VariableValue } from './variable.service';
@Injectable({
  providedIn: 'root',
})
export class AsyncValidatorService {

  private register = 'register';
  private checkUsername = 'checkExistByUsername';
  private checkEmail = 'checkExistByEmail';
  constructor(private http: HttpClient, private variableValue: VariableValue) {}

  getCheckUser(username: string) {
    return this.http.get(
      [this.variableValue.baseUrl, this.register, this.checkUsername, username].join('/')
    );
  }
  getCheckEmail(email: string) {
    return this.http.get(
      [this.variableValue.baseUrl, this.register, this.checkEmail, email].join('/')
    );
  }
}
