import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  private baseUrl = 'http://localhost:3000'
  private path = 'users'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<UserInterface[]>;
  }

}
