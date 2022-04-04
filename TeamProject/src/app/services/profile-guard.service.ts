import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: 'root',
  })
export class ProfileGuard implements CanActivate {
    constructor(private LS: LoginService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.LS.isAuthenticated().then((authenticated) => {
            if (authenticated) {
                if(this.LS.currentUser["userRole"] === "admin") {
                    return true;
                } else if(route.params["username"] === this.LS.currentUser["userName"]) {
                    this.router.navigate(["profile"]);
                }else {
                    return false;
                }
            } else {
                this.router.navigate(["/"]);
            }
        });
    }
}