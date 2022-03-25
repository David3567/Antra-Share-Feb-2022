import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private register = 'register';
  private createNewAccount = 'createNewAccount';
  constructor(private http: HttpClient, private variableValue: VariableValue) {}
  postNewAccount(newAcount: User) {
    return this.http.post(
      [this.variableValue.baseUrl, this.register, this.createNewAccount].join(
        '/'
      ),
      newAcount
    ) as Observable<User>;
  }
}
