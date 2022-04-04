import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../services/authen.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {
  constructor(private auth:AuthenService){}
  canActivate():boolean{
    const userName = this.auth.getUserName()
    const targetUserName =localStorage.getItem('userName')
    if(targetUserName!==null)
    {
      return (userName===targetUserName);
    }
    return false;
  }
  
}
