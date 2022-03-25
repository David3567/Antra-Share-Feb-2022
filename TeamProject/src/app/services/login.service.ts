import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AppUserAuth } from '../interfaces/user-auth.model';
import { AppUser } from '../interfaces/users.model';

const API_URL = "http://localhost:4231/api";
const httpOptions = {
  observe: "response" as "body", // check the whole response
  headers: new HttpHeaders({
    "Content-Type": "application/json",
  }),
};

@Injectable({
  providedIn: 'root'
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
      .post<AppUserAuth>([API_URL, "login"].join("/"), entity, httpOptions)
      .pipe(
        tap((data: any) => {
          // get jwt from response headers
          // console.log(data.headers.get("bearerToken"));

          // get data from jwt
          // const decoded = jwt_decode(data.body.bearerToken);
          // console.log("decoded info: ", decoded);

          // update shared object
          // console.log(data.body);
          Object.assign(this.securityObject, data.body);

          // store jwt into localstorage
          localStorage.setItem("bearerToken", this.securityObject.bearerToken);
        })
      );

    // Object.assign(
    //   this.securityObject,
    //   LOGIN_MOCKS.find(user =>
    //     user.userName.toLowerCase() === entity.userName.toLowerCase())
    // );
    // if (this.securityObject.userName !== '')
    //   localStorage.setItem('bearerToken', this.securityObject.bearerToken);
    // return of<AppUserAuth>(this.securityObject);
  }

  logout(): void {
    this.resetSecurityObject();
    console.log("logout");
  }

  resetSecurityObject(): void {
    this.securityObject = new AppUserAuth();
    // this.securityObject.name = "";
    // this.securityObject.bearerToken = "";
    // this.securityObject.isAuthenticated = false;

    // this.securityObject.claim = {
    //   canAccessProducts: false,
    //   canAddProducts: false,
    //   canSaveProduct: false,
    //   canAccessCategories: false,
    //   canAddCategory: false,
    // };

    localStorage.removeItem("bearerToken");
  }
}