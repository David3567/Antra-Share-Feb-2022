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
export class ProfileGuard implements CanActivate {
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
    const userName = this.securityService.securityObj.userName;
    const userRole = this.securityService.securityObj.userRole;
    if (userRole === 'admin' || userName === route.params['username']) {
      return true;
    }
    this.router.navigate(['home'], { relativeTo: this.activateRoute });
    return false;
  }
}
