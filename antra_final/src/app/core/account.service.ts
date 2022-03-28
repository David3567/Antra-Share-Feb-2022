import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewUser } from '../interface/newuser.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private createNewAccount = 'createNewAccount';
  url = 'http://localhost:4231/api/register';

  constructor(private http: HttpClient) {}

  addNewAccount(account: any) {
    return this.http.post(
      [this.url, this.createNewAccount].join('/'),account
    ) as Observable<NewUser>;
  }
}
