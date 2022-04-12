import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_URL = 'http://localhost:4231/api';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  getUserByUsername(name: string) {
    return this.http.get(`${API_URL}/register/checkExistByUsername/${name}`);
  }

  getUserByEmail(email: string) {
    return this.http.get(`${API_URL}/register/checkExistByEmail/${email}`);
  }
}
