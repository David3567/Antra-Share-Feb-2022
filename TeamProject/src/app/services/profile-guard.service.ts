import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { JWTDecoderService } from "./jwt-decoder.service";
import { LoginService } from "./login.service";

@Injectable({
    providedIn: 'root',
})
export class ProfileGuard implements CanActivate {
    constructor(private decoderService: JWTDecoderService,
        private LS: LoginService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.LS.isAuthenticated().then((authenticated) => {
            if (authenticated) {
                if (this.decoderService.getCurrentUser().userRole === "admin") {
                    return true;
                } else if (route.params["username"] === this.decoderService.getCurrentUser().userName) {
                    this.router.navigate([`profile/${this.decoderService.getCurrentUser().userName}`]);
                } else {
                    return false;
                }
            } else {
                this.router.navigate(["/"]);
            }
        });
    }
}