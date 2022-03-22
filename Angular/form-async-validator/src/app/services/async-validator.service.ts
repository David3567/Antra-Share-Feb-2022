import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AsyncValidatorService {
  url = 'http://localhost:4231/api/users/getUser';

  constructor(private http: HttpClient) {}

  getUser(email: string) {
    return this.http.get([this.url, email].join('/'));
  }
}
