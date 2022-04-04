import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppUserAuth } from 'src/app/core/services/interface/app-user-auth';
import jwt_decode from "jwt-decode";
@Injectable()
export class JwtService {
  securityObj: AppUserAuth = new AppUserAuth();
  constructor(private authService: AuthService, private router: Router) {
    this.securityObj = this.authService.securityObj;
  }
  private token:string | null= localStorage.getItem("bearerToken");
  private decoded: any = this.token? jwt_decode(this.token) : {userName:"User"};
  ngOnInit(): void{
    const newSecurityObj = {
        userName: this.decoded.userName,
        isAuthenticated: this.decoded.userRole==="admin",
        claim: this.decoded.claim,
        userEmail: this.decoded.userEmail,
      };
    this.authService.securityObj = newSecurityObj;
    this.securityObj = newSecurityObj;
  }
  getUser(){
      return this.securityObj.userName;
  }
  getEmail() {
      return this.securityObj.userEmail;
  }
  getAuthenticated() {
      return this.securityObj.isAuthenticated;
  }
}