import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { LoginUser } from '../interfaces/login.model';
import { AppUserAuth } from '../interfaces/userauth.model';

const httpOptions = {
  observe: "response" as "body", // check the whole response
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private securityObject: AppUserAuth = new AppUserAuth();


  baseUrl = 'http://localhost:4231/api';
  private login = "login"
  user: any;

  constructor(private http: HttpClient) { }

  set securityObj(newObj: AppUserAuth) {
    this.securityObject = newObj;
  }

  get securityObj() {
    return this.securityObject;
  }

  userlogin(entity: LoginUser) {
    this.resetSecurityObject();

    return this.http
      .post<AppUserAuth>([this.baseUrl, this.login].join("/"), entity, httpOptions)
      .pipe(
        tap((data: any) => {
          Object.assign(this.securityObject, data.body);
          localStorage.setItem("bearerToken", this.securityObject.bearerToken);
        })
      );
  }

  logout(): void {
    this.resetSecurityObject();
    console.log("logout");
  }

  resetSecurityObject(): void {
    // this.securityObject = new AppUserAuth();
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;

    this.securityObject.claim = {
      canAccessProducts: false,
      canAddProducts: false,
      canSaveProduct: false,
      canAccessCategories: false,
      canAddCategory: false,
    };

    localStorage.removeItem("bearerToken");
  }
}
