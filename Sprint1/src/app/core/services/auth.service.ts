import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pipe, tap } from 'rxjs';
import { AppUser } from './interface/app-user';
import { AppUserAuth } from './interface/app-user-auth';
import { Users } from './interface/register.model';

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
      .post<AppUserAuth>([API_URL, 'login'].join('/'), entity, httpOptions)
      .pipe(
        tap((data: any) => {
          Object.assign(this.securityObject, data.body);
          localStorage.setItem('bearerToken', this.securityObject.bearerToken!);
          localStorage.setItem('userName', this.securityObject.userName);
          localStorage.setItem('userEmail', this.securityObject.userEmail);

        })
      );
  }

  logout(): void {
    this.resetSecurityObject();
    console.log('logout');
  }

  register(entity: Users) {
    // console.log(entity);
    // console.log('register');
    this.resetSecurityObject();
    return this.http.post<Users>(
      [API_URL, 'register', 'createNewAccount'].join('/'),
      entity,
      httpOptions
    );
    // .pipe(
    //   tap((data:any)=>{
    //     Object.assign(this.securityObject, data.body);
    //     localStorage.setItem("bearerToken", this.securityObject.bearerToken);
    //   })
    // );
  }

  registercheckuseremail(useremail: string) {
    return this.http.get<any>(
      [API_URL, 'register', 'checkExistByEmail', useremail].join('/'),
      httpOptions
    );
  }

  getProfile(username: string) {
    return this.http.get<any>(
      [API_URL, 'users', 'getProfile', username].join('/'),httpOptions
    );
  }

  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.userEmail = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;

    this.securityObject.claim = {
      canAccessProducts: false,
      canAddProducts: false,
      canSaveProduct: false,
      canAccessCategories: false,
      canAddCategory: false,
    };

    localStorage.removeItem('bearerToken');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
  }
}
