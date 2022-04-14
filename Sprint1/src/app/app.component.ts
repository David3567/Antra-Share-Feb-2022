import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { AppUserAuth } from './core/services/interface/app-user-auth';
import jwt_decode from "jwt-decode";
import { JwtService } from './core/services/jwt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sprint1';
  login!: boolean;
  username!:string;
  securityObj: AppUserAuth  = new AppUserAuth();

  constructor(
    private authService: AuthService,
    private router: Router,
    private jwt: JwtService
    
  ) {
    this.securityObj = this.jwt.getjwt();
  }

  ngOnInit(): void {
    this.onlogin();
  }

  onlogin(){
    this.login = this.authService.getlogin();
    this.username = this.jwt.getjwt().userName;
  }

  onlogout() {
    console.log(this.securityObj);
    this.username = '';
    this.authService.logout();
    this.login = this.authService.getlogin();
    this.router.navigate(['login']);

  }

}
