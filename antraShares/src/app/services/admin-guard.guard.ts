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
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuardGuard implements CanActivate {
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
    const isAuthenticated = this.securityService.securityObj.isAuthenticated;
    const userRole = this.securityService.securityObj.userRole;
    if(isAuthenticated){
      return true;
    }else{
      this.router.navigate(['register'],{
        
      })
      return false;
    }
    
  }
}
