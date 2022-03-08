import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interface/interface.model';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {
  private baseUrl = 'http://localhost:3000';
  private path = 'users';

  constructor(private http: HttpClient) {}

  getUser() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      Users[]
    >;
  }
}
