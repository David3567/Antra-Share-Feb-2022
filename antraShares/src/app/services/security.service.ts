import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { VariableValue } from './variable.service';
import { AppUser, AppUserAuth } from '../interfaces/app-user.model';
import { Observable, tap } from 'rxjs';
import jwt_decode from 'jwt-decode';
const httpOptions = {
  observe: 'response' as 'body',
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private securityObject: AppUserAuth = new AppUserAuth();
  
  constructor(private variableValue: VariableValue, private http: HttpClient) {}
  set securityObj(newObj: AppUserAuth) {
    this.securityObject = newObj;
  }
  get securityObj() {
    return this.securityObject;
  }
  login(entity: AppUser) {
    this.resetSecurityObject();

    return this.http
      .post<AppUserAuth>(
        [this.variableValue.baseUrl, 'login'].join('/'),
        entity,
        httpOptions
      )
      .pipe(
        tap((data: any) => {
          Object.assign(this.securityObject, data.body);
          const authen = this.securityObject.bearerToken;
          const decoded: any = jwt_decode(
            this.securityObject.bearerToken || ''
          );
          localStorage.setItem('bearerToken', authen!);
        })
      );
  }

  logout(): void {
    this.resetSecurityObject();
    console.log('logout');
  }

  resetSecurityObject(): void {
    this.securityObject.userName = '';
    this.securityObject.bearerToken = '';
    this.securityObject.isAuthenticated = false;
    this.securityObject.userRole = '';

    localStorage.removeItem('bearerToken');
  }
  getUserName(){
   return this.securityObj.userName
  }
}
