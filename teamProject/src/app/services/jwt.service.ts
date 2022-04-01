import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  token!: string;
  decodedToken!: any;
  userName!: string;
  userEmail!: string;
  userRole!: string;

  constructor() { }

  getJWT(data: any) {
    //console.warn(data);
    this.token = data.bearerToken;
    localStorage.setItem('token', this.token);
    localStorage.setItem('username', data.userName);
  }

  DecodeToken() {
    this.decodedToken = jwt_decode(this.token);
    this.userEmail = this.decodedToken.userEmail;
    this.userRole = this.decodedToken.userRole;
  }

}
