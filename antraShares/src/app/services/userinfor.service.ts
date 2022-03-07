import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/userlist.model';

@Injectable({
  providedIn: 'root'
})
export class UserinforService {
  private baseUrl = 'http://localhost:3000';
  private path = 'users';
  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('/'))as Observable<Users[]>;
}
}
