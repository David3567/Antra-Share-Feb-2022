import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/userlist.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private register = 'register';
  private createNewAccount = 'createNewAccount';
  private baseUrl = 'https://localhost:4231/api'
  constructor(private http: HttpClient) { }
  postNewAccount(newAcount: any) {
    return this.http.post(
      [this.baseUrl, this.register, this.createNewAccount].join(
        '/'
      ),
      newAcount
    ) as Observable<Users>;
  }
}
