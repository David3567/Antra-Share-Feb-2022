import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { AppUserAuth } from '../interfaces/user-auth.model';

@Injectable({
  providedIn: 'root',
})
export class JWTDecoderService {
  private token: string;
  //  = localStorage.getItem('bearerToken');
  private decoded: AppUserAuth;
  //  = this.token ? jwt_decode(this.token) : { userName: "Guest" };

  getCurrentUser() {
    this.token = localStorage.getItem('bearerToken');
    this.decoded = this.token
      ? jwt_decode(this.token)
      : {
          name: 'Guestname',
          userName: 'Guest',
          userEmail: 'test@gmail.com',
          userRole: '',
          bearerToken: '',
        };
    return this.decoded;
  }
}
