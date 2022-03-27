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
  private users = 'users';
  private getAllUsers = 'getAllUsers';

  constructor(private http: HttpClient) { }

  getUser(email: string) {
    return this.http.get([this.baseUrl, this.users, this.getAllUsers, email].join('/')) 
  }

}
