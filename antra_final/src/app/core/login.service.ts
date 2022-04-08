import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { tap } from 'rxjs';
import { Loginobject } from '../interface/loginobject.model';
import { UserProfile } from '../interface/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string = '';
  decoded: any;
  currentUser: string = '';
  currentUserRole: string = '';

  private isAuthenticated = false;

  httpOptions = {
    observe: 'response' as 'body',
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  url = 'http://localhost:4231/api/login';

  private userObject: UserProfile = new UserProfile();

  constructor(private http: HttpClient) { }

  clearUserObject() {
    this.userObject = new UserProfile();
    localStorage.removeItem('bearerToken');
  }

  getLoginValidation(credentials: Loginobject) {
    this.clearUserObject();

    return this.http.post<UserProfile>(this.url, credentials, this.httpOptions)
      .pipe(
        tap((data: any) => {
          Object.assign(this.userObject, data.body);
          let decodedToken: any = jwt_decode(this.userObject.bearerToken);
          // let newDecodedToken: any = { ...decodedToken, userRole: undefined };
          localStorage.setItem('bearerToken', JSON.stringify(decodedToken));
          // console.log(newDecodedToken.userName);
        })
      );
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  setIsAuth(input: boolean) {
    this.isAuthenticated = input;
  }

  decodeToken() {
    this.token = JSON.parse(localStorage.getItem('bearerToken')!);
    this.decoded = jwt_decode(this.token);
  }

  getCurrentUsername() {
    this.decodeToken();
    return this.currentUser = this.decoded.userName;
  }

  getCurrentUserRole() {
    this.decodeToken();
    return this.currentUserRole = this.decoded.userRole;
  }

}
