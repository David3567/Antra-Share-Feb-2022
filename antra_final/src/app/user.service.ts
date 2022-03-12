import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './core/interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl = 'http://localhost:3000';
  userPath = 'users';
  userlist?: Observable<User>;

  constructor(private http: HttpClient) { }

  getAllUsers: () => Observable<User[]> = () =>
    this.http.get([this.baseurl, this.userPath].join('/')) as Observable<User[]>;

  deleteUser = (id: string): Observable<Object> => {
    return this.http.delete([this.baseurl, this.userPath, id].join('/'));
  };

}
