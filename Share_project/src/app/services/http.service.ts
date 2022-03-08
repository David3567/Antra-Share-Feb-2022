import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../admin/models/user.model';

@Injectable({
  providedIn: 'root'
})



export class HttpService {

  private baseUrl = "http://localhost:3000"
  private path = "/users"

  constructor(private http: HttpClient) { 
    
  }

  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('')) as Observable<User[]>;
  }
}
