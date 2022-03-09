import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from '../interfaces/userInfo.model'

@Injectable()
export class UserinforService {
  private baseUrl = 'http://localhost:3000';
  private path = 'antraUsers';
  constructor(private http: HttpClient) { }
  getUsers() {
    return this.http.get([this.baseUrl, this.path].join('/')) as Observable<
      UserInfo[]
    >;
  }
}
