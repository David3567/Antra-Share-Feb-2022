import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class JWTDecoderService {
  private token: string = localStorage.getItem('bearerToken');
  private decoded: any = this.token ? jwt_decode(this.token) : { userName: "Guest" };

  getCurrentUser() {
    return this.decoded;
  }

}
