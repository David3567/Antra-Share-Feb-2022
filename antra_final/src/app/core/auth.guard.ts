import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Injectable } from "@angular/core";
import { map, of, Observable, switchMap} from "rxjs";
import { LoginService } from "./login.service";
import { ProfileService } from "./profile.service";
import { NewUser } from "../interface/newuser.model";


@Injectable()
export class AuthGuard implements CanActivate {
  authService: any;
  // token: any = localStorage.getItem('bearerToken');
  // user: any = JSON.parse(this.token);
  username: any = this.loginService.getCurrentUsername();
  userrole: any = this.loginService.getCurrentUserRole();
  userList!: NewUser[];

  constructor(private router: Router,
    private loginService: LoginService,
    private profileService: ProfileService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

    this.profileService.getCurrentUser().subscribe((data) => {
      this.userList = data;
      // console.log(this.userList);
    })

    // return this.loginService.getIsAuth().subscribe((data: any) => {
    //   if (!data) {
    //     return this.router.navigate(['/login']);
    //   } else {
    //     if (this.user.userRole === "admin") {
    //       return true;
    //     } else if (this.user.userName === this.userList[0].userName) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // }

    return this.loginService.getIsAuth().pipe(switchMap((data) => {
      if (!data) {
            return this.router.navigate(['/login']);
          } else {
            if (this.userrole === "admin") {
              return of(true);
            } else if (this.username === this.userList[0]?.userName) {
              return of(true);
            } else {
              return of(false);
            }
          }
    }) 
    ) }



}
