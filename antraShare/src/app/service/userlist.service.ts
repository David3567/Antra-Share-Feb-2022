import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../admin/interface/interface.model';

@Injectable()
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
