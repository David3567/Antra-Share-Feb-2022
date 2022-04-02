import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AppUserAuth } from '../interfaces/user-auth.model';
import { AppUser } from '../interfaces/users.model';
import jwt_decode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';

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
  // private token?: string = ''
  // private decoded?: any = jwt_decode(this.token);
  private decoded: any;
  // public currentUser?: any = { ...this.decoded };
  currentUser = {
    _id: '',
    name: '',
    userName: '',
    userEmail: '',
    userRole: '',
    age: 0,
    gender: 'female',
    phone: 0
  };
  private currentUser$ = new BehaviorSubject(this.currentUser);

  private securityObject: AppUserAuth = new AppUserAuth();

  set securityObj(newObj: AppUserAuth) {
    this.securityObject = newObj;
  }

  get securityObj() {
    return this.securityObject;
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const token = localStorage.getItem('bearerToken');
    if (token) {
      this.decoded = jwt_decode(token);
      this.currentUser = { ...this.decoded };
    }
  }

  getCurrentUser() {
    return this.currentUser$.asObservable();
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
          // console.log('data: ', data);
          // this.decoded = jwt_decode(data.bearerToken); // <-----------
          // console.log('data: ', this.decoded);
          // this.currentUser = { ...this.decoded };
          // console.log('data: ', data);
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
}
