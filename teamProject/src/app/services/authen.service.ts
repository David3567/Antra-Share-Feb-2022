import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, tap } from 'rxjs/operators';
import { NewUser } from "src/app/interfaces/backEndUser.model";
import { JwtUserModel } from "src/app/interfaces/jwt.model";
import jwt_decode from 'jwt-decode';
import { Auth } from '../interfaces/auth.model';


const AUTH_API = 'http://localhost:4231/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  private authObj: Auth = new Auth();

  constructor(private http: HttpClient) { }

  set authObject(newObj:Auth){
    this.authObj = newObj;
  }

  get authObject(){
    return this.authObj;
  }

  getAllUserNames() {
    return this.http.get<NewUser[]>(AUTH_API + 'users/getAllUsers').pipe(map(val => {
      return val.map(item => {
        return item.userName;
      })
    }))
  }

  getAllUserEmails() {
    return this.http.get<NewUser[]>(AUTH_API + 'users/getAllUsers').pipe(map(val => {
      return val.map(item => {
        return item.userEmail;
      })
    }))
  }

  getSpecificUser(username:string){
    // return this.http.get<NewUser>(AUTH_API+'users/getprofile/'+username).pipe(catchError(error=>{ return of(false)}));
    return this.http.get<NewUser>(AUTH_API+'users/getprofile/'+username);
  }

  register(userName: string, userEmail: string, password: string, userRole: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/createNewAccount', {
      userName,
      userEmail,
      password,
      userRole
    }, httpOptions);
  }

  login(userEmail: string, password: string,) {
    this.resetAuthObject();
    return this.http.post<Auth>(AUTH_API + 'login', {
      userEmail,
      password
    }, httpOptions).pipe(tap((data: any) => {
      Object.assign(this.authObj, data.body);
      localStorage.setItem('bearerToken', this.authObj.bearerToken);
      console.log(this.authObj.bearerToken)
    }));
  }

  saveJwtToken(token:string){
    localStorage.setItem('token',token);
  }

  decodeToken(token:string):JwtUserModel {
    return jwt_decode(token) as JwtUserModel;
  }

  verifyProfileAccessbility(publisherName:string):boolean{
    const token = localStorage.getItem('token');
    if(token!==null){
      const user:JwtUserModel =  this.decodeToken(token);
      if((user.userName===publisherName)||(user.userRole==='admin'))
        return true;
    }
    else console.log('error when retriving token')
    return false;
  }

  //currently this function is the same to the profile because their requirement are the same
  //open to change when any requirement change happpens
  grantDeleteAccessbility(publisherName:string):boolean{
    return this.verifyProfileAccessbility(publisherName);
  }

  getUserName(): string {
    const token = localStorage.getItem('token');
    if(token!==null){
      return this.decodeToken(token).userName;
    }
    return'';
  }


  resetAuthObject(): void {
    this.authObj.userEmail = "";
    this.authObj.bearerToken = "";
    this.authObj.isAuthenticated = false;

    localStorage.removeItem("bearerToken");
  }
}