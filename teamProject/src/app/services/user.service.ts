import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewUser } from '../interfaces/newUser.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl='http://localhost:4231/api'
  private register = 'register'
  private createNewAccount = 'createNewAccount'

constructor(private http: HttpClient) { }

registerUser(user: any) {
  return this.http.post([this.baseUrl, this.register, this.createNewAccount].join('/'), user) as Observable <
    NewUser>;
}

}
