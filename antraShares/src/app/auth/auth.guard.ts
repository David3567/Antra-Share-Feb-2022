import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SecurityService } from '../services/security.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private securityService: SecurityService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let roles = route.data['userRole'] as string;
    const isAuthenticated = this.securityService.securityObj.isAuthenticated;
    const userRole = this.securityService.securityObj.userRole;
    if (isAuthenticated) {
      if (userRole !== roles && roles === 'admin') {
        // this.router.navigate([''], { queryParams: { returnUrl: state.url } });
        this.router.navigate(['home'], { relativeTo:this.activateRoute });
        return false;
      }
      return true;
    }

    // this.router.navigate([''], { queryParams: { returnUrl: state.url } });
    this.router.navigate([''], { relativeTo: this.activateRoute });
    return false;
  }
}
