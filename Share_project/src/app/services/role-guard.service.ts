import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectRole = route.data['expectedRole'];

    const role = localStorage.getItem('role') || "";

    // const tokenPayload = decode(token);

    if (!this.auth.isLoggedIn() || role !== expectRole) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
}
