import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTDecoderService {
  private token: string;
  //  = localStorage.getItem('bearerToken');
  private decoded: any;
  //  = this.token ? jwt_decode(this.token) : { userName: "Guest" };

  getCurrentUser() {
    this.token = localStorage.getItem('bearerToken');
    this.decoded = this.token ? jwt_decode(this.token) : { userName: "Guest", userEmail: "ex. test@gmail.com" };
    return this.decoded;
  }

}
