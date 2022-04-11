import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { JWTDecoderService } from "../services/jwt-decoder.service";
import { LoginService } from "../services/login.service";

@Injectable({
    providedIn: 'root',
})
export class GenericGuard implements CanActivate {
    constructor(private jwtService: JWTDecoderService,
        private loginService: LoginService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.loginService.isAuthenticated().then((authenticated) => {
            if (authenticated) {
                return true;
            } else {
                alert("You need to be logged in.")
                this.router.navigateByUrl('/');
                return false;
            }
        });
    }
}