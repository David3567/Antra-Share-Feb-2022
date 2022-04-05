import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanLoad{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    console.log('canActivate');
    const loginstatus = this.auth.isLoggedIn();
    if (!loginstatus || loginstatus == null) {
      console.log(this.auth.isLoggedIn() + "   inside if");
        this.router.navigate(['/']);
        return false;
      }
      return true;
  }

  canLoad(): boolean {
    console.log("canLoad");
    const loginstatus = this.auth.isLoggedIn();
    if (!loginstatus || loginstatus == null) {
        this.router.navigate(['/']);
        alert('You are not authorised to visit this page');
        return false;
      }
      return true;
    
  }
}
