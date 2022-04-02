import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersTemplate } from '../interfaces/users.model';


const API_URL = "http://localhost:4231/api";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>("http://localhost:3000/users");
  }

  getAllUsers() {
    return this.http.get<any>(`${API_URL}/users/getAllUsers`);
  }

  getUserProfile(name: string) {
    return this.http.get<any>(`${API_URL}/users/getProfile/${name}`)
  }

}
