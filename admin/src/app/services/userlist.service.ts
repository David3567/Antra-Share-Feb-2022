import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  private baseURL = 'http://localhost:3000';
  private path = 'users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get([this.baseURL, this.path].join('/')) as Observable<
      User[]
    >;
  }
}
