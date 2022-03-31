import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

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
}
