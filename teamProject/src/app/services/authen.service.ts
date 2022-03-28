import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map } from 'rxjs/operators';
import { NewUser } from "src/app/interfaces/backEndUser.model";

const AUTH_API = 'http://localhost:4231/api/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  constructor(private http: HttpClient) { }

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
    return this.http.get<NewUser>(AUTH_API+'users/getprofile/'+username).pipe(catchError(error=>{ return of(false)}));
  }

  register(userName: string, userEmail: string, password: string, userRole: string): Observable<any> {
    return this.http.post(AUTH_API + 'register/createNewAccount', {
      userName,
      userEmail,
      password,
      userRole
    }, httpOptions);
  }

  login(userEmail: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      userEmail,
      password
    }, httpOptions);
  }
}