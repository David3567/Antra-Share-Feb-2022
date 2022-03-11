import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userTemplate } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class userDataService {
  private baseUrl = 'http://localhost:3000';
  private path = 'users';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get<userTemplate[]>([this.baseUrl, this.path].join('/'));
  }
}
