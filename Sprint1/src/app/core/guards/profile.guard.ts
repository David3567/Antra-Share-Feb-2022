import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { delay, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AppUserAuth } from '../services/interface/app-user-auth';
@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  securityObj: AppUserAuth  = new AppUserAuth();
  username1!:string;
  username2!:string;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.securityObj = this.authService.securityObj;
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.securityObj.isAuthenticated);
      console.log(this.securityObj.userName);
      console.log(route.params["username"] === this.securityObj.userName);
      if(this.securityObj.isAuthenticated || route.params["username"] == this.securityObj.userName) return true;
      else return false;
  }
}