import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable()
export class JwtService {
  private token!: string;

  private decoded!: any;

  constructor() {}

  setjwt(data: any) {
    this.token = data.bearerToken;
    localStorage.setItem('bearerToken', data.bearerToken);
    localStorage.setItem('userName', data.userName);
    localStorage.setItem('userEmail', data.userEmail);
  }

  getjwt() {
    if (localStorage.getItem('bearerToken')) {
      this.token = localStorage.getItem('bearerToken')!;
      this.decoded = jwt_decode(this.token);
      const newSecurityObj = {
        userName: this.decoded.userName,
        isAuthenticated: this.decoded.userRole === 'admin',
        claim: this.decoded.claim,
        userEmail: this.decoded.userEmail,
      };
      // console.log('token here', newSecurityObj);
      return newSecurityObj;
    }
    return {
      userName: '',
      userEmail: '',
      isAuthenticated: false,
      claim: {
        canAccessProducts: false,
        canAddProducts: false,
        canSaveProduct: false,
        canAccessCategories: false,
        canAddCategory: false,
      },
    };
  }
}
