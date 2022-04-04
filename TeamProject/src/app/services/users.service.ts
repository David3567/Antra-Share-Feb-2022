import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JWTDecoderService } from './jwt-decoder.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private jwt: JWTDecoderService) { }

  getUsers() {
    // return this.http.get<any>("http://localhost:3000/users");
    return this.http.get<any>("http://localhost:4231/api/users/getAllUsers");
  }

  getProfile(username: string) {
    return this.http.get<any>(['http://localhost:4231/api/users/getProfile', username].join('/'));
  }
}
