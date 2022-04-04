import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { ProfileService } from "./profile.service";
import { NewUser } from "../interface/newuser.model";

@Injectable()
export class AuthGuard implements CanActivate {
  authService: any;
  token: any = localStorage.getItem('bearerToken');
  user: any = JSON.parse(this.token);
  userList!: NewUser[];

  constructor(private router: Router,
    private loginService: LoginService,
    private profileService: ProfileService) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    // const isAuth = this.loginService.getIsAuth();
    // if (!isAuth) {
    //   return this.router.navigate(['/settings']);
    // } else {
    //   if (this.user.userRole === "admin") {
    //     return true;
    //   } else if (this.user.userName === this.userList.userName) {
    //     return true;
    //   } else {
    //     return true;
    //   }
    // }

      this.profileService.getCurrentUser().subscribe((data) => {
        this.userList = data;
        console.log(this.userList);
      })

    const isAuth = this.loginService.getIsAuth();
    if (!isAuth) {
      return this.router.navigate(['/login']);
    } else {
      if (this.user.userRole === "admin") {
        return isAuth;
      } else if (this.user.userName === this.userList[0].userName) {
        return isAuth;
      } else {
        return !isAuth;
      }
    }

  }

}
