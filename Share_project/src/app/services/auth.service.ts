import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, shareReplay, throwError } from 'rxjs';
import * as moment from "moment";
import { loginInfo } from '../login/models/loginInfo';
import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  url = 'http://localhost:4231/api/login'
  userInfo!: loginInfo;

  constructor(private http: HttpClient) {
    this.logout();
   }

  login(username: string, password: string) {
    const headers = { 'content-type': 'application/json'} 

    const infoJson = JSON.stringify({
      "userEmail": username,
      "password": password
    });

    console.log(infoJson);
    return this.http.post<loginInfo>(this.url, infoJson, {'headers':headers}).pipe(catchError(this.handleError)).subscribe(res => {
      this.setSession(res);
    });
  }

  private setSession(authResult:loginInfo) {
    const expiresAt = moment().add(20000, 'second');
    console.log(decode(authResult.bearerToken));
    localStorage.setItem('name', authResult.userName);
    localStorage.setItem('token', authResult.bearerToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
    localStorage.setItem('role', authResult.userRole)
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("expires_at");
    localStorage.removeItem('role');
    localStorage.removeItem('name');
  }

  isLoggedIn() {
    console.log(moment().isBefore(this.getExpiration()) + "   isloggedIn")
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration || '{}');
    console.log('expiresat' + expiration)
    console.log("getExp");
    console.log(moment(expiresAt))
    return moment(expiresAt)
  }

  public getUser() {
    return this.userInfo;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
