import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';
import { NewUser } from '../interfaces/newUser.model';

@Injectable({
  providedIn: 'root'
})
export class AsyncValidatorService {

  baseUrl = 'http://localhost:4231/api';
  private register = 'register';
  private checkExistByUsername = 'checkExistByUsername';
  private checkExistByEmail = 'checkExistByEmail';

  DBuserNames!: NewUser;

  constructor(private http: HttpClient) { }

  getAllUserName(name: string) {
    return this.http.get([this.baseUrl, this.register, this.checkExistByUsername, name].join('/'))
  }

  getAllUserEmail(email: string) {
    return this.http.get([this.baseUrl, this.register, this.checkExistByEmail, email].join('/'))
  }

}
