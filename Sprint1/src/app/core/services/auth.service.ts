import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { AppUser } from '../../services/interface/app-user';
import { AppUserAuth } from '../../services/interface/app-user-auth';
import { Users } from '../../services/interface/register.model';

const API_URL = 'http://localhost:4231/api';
const httpOptions = {
  observe: 'response' as 'body',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) {}

  set securityObj(newObj: AppUserAuth) {
    this.securityObject = newObj;
  }

  get securityObj() {
    return this.securityObject;
  }

  login(entity: AppUser) {
    this.resetSecurityObject();
    return this.http
    .post<AppUserAuth>([API_URL, "login"].join("/"), entity, httpOptions)
    .pipe(
      tap((data:any)=>{
        Object.assign(this.securityObject, data.body);
        localStorage.setItem("bearerToken", this.securityObject.bearerToken);
      })
    );
  }


  logout() : void {
    this. resetSecurityObject();
    console.log("logout");
  }


  register(entity: Users) {
    console.log(entity);
    this.resetSecurityObject();
    return this.http
    .post<Users>([API_URL, "register", "createNewAccount"].join("/"), entity, httpOptions)
    .pipe(
      tap((data:any)=>{
        Object.assign(this.securityObject, data.body);
        localStorage.setItem("bearerToken", this.securityObject.bearerToken);
      })
    );
  }


  resetSecurityObject() : void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;

    this.securityObject.claim = {
      canAccessCategories: false,
      canAccessProducts: false,
      canAddCategory: false,
      canAddProducts: false,
      canSaveProduct: false,
    }
  }
}
