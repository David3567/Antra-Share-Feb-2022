import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AppUserAuth } from '../interfaces/user-auth.model';
import { AppUser } from '../interfaces/users.model';

const API_URL = 'http://localhost:4231/api';
const httpOptions = {
  observe: 'response' as 'body', // check the whole response
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private securityObject: AppUserAuth = new AppUserAuth();

  constructor(private http: HttpClient) { }

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
          // update shared object
          Object.assign(this.securityObject, data.body);

          // store jwt into localstorage
          localStorage.setItem('bearerToken', this.securityObject.bearerToken);
        })
      );
  }

  logout(): void {
    this.resetSecurityObject();
    console.log('logout');
  }

  resetSecurityObject(): void {
    this.securityObject = new AppUserAuth();

    localStorage.removeItem('bearerToken');
  }

  isAuthenticated() {
    const promise = new Promise((res, rej)=> {
      res(!!localStorage.getItem('bearerToken'));
    });

    return promise;
  }
}
