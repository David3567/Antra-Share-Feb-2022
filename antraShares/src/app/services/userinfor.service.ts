import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/userlist.model';
import { VariableValue } from './variable.service';

@Injectable({
  providedIn: 'root',
})
export class UserinforService {
  private path = 'users';
  private getAllUser = 'getAllUsers';
  private getProfile = 'getProfile';
  constructor(private http: HttpClient, private variableValue: VariableValue) {}
  getUsers() {
    return this.http.get(
      [this.variableValue.baseUrl, this.path, this.getAllUser].join('/')
    ) as Observable<Users[]>;
  }
  getUser(name: string) {
    return this.http.get(
      [this.variableValue.baseUrl, this.path, this.getProfile, name].join('/')
    ) as Observable<Users>;
  }
  deleteUser(user: Users) {
    const url = `${this.variableValue.baseUrl}/${this.path}/${user._id}`;
    return this.http.delete<Users>(url);
    // return this.http.delete([this.baseUrl, this.path, user.id]) as Observable<Users>
    // return this.http.delete([this.baseUrl,this.path].join('/'), user) as Observable<Users[]>;
  }
}
