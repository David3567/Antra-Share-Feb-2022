import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AppUserAuth } from '../services/interface/app-user-auth';
import { JwtService } from '../services/jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  constructor(
    private jwt:JwtService ,
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // console.log(
      //   route.queryParams
      // );
      // console.log("admin", this.jwt.getjwt().isAuthenticated);
      // console.log(this.jwt.getjwt().userName);
      // console.log(route.params["username"]);
      // console.log(route.params["username"] === this.jwt.getjwt().userName);
      if(this.jwt.getjwt().isAuthenticated || route.queryParams["username"] == this.jwt.getjwt().userName) return true;
      else return false;
  }
}