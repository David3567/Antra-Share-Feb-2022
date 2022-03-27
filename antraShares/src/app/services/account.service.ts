import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private register = 'register';
  private createNewAccount = 'createNewAccount';
  private baseUrl = 'http://localhost:4231/api'
  constructor(private http: HttpClient) { }
  postNewAccount(newAccount: any) {
    console.log(newAccount)
    return this.http.post(
      [this.baseUrl, this.register, this.createNewAccount].join('/'),
      newAccount
    ) as Observable<User>;
  }
}
