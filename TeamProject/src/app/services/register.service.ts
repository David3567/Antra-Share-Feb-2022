import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import { AppUserAuth } from '../interfaces/user-auth.model';
import { DBUser } from '../interfaces/user-auth.model';
import { AppNewUser } from '../interfaces/users.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  API_URL = 'http://localhost:4231/api';
  API_Path = 'register';

  constructor(private http: HttpClient) { }

  // getAllUserNames() {
  //   return this.http
  //   .get<DBUser[]>(API_URL + '/users/getAllUsers')
  //   .pipe(map(val => {
  //     return val.map(item => {
  //       return item.userName;
  //     })
  //   }))
  // }

  // getAllUserEmails() {
  //   return this.http
  //   .get<DBUser[]>(API_URL + '/users/getAllUsers')
  //   .pipe(map(val => {
  //     return val.map(item => {
  //       return item.userEmail;
  //     })
  //   }))
  // }



  // set securityObj(newObj: AppUserAuth) {
  //   this.securityObject = newObj;
  // }

  // get securityObj() {
  //   return this.securityObject;
  // }

  register(entity: AppNewUser) {

    // return this.http
    //   .post<AppUserAuth>([API_URL, "register"].join("/"), entity, httpOptions)
    //   .pipe(
    //     tap((data: any) => {
          
    //       Object.assign(this.securityObject, data.body);

    //     })
    //   );

  }


  checkyByUsername(username:string) {
    // return this.http.get(API_URL+ "/register" + "/checkExistByUsername/" + username);

    return this.http
    .get<string>(this.API_URL + '/' + this.API_Path + '/' + 'checkExistByUsername' + '/' + username);

  }

  checkyByUseremail(useremail:string) {
    // return this.http.get(API_URL+ "/register" + "/checkExistByEmail/" + useremail);
  }

}