import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { AppUserAuth } from './core/services/interface/app-user-auth';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sprint1';
  securityObj: AppUserAuth  = new AppUserAuth();

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.securityObj = this.authService.securityObj;
  }

  ngOnInit(): void {
    const token = localStorage.getItem("bearerToken");
    console.log("code here", token);



    if (token) {
      const decoded: any = jwt_decode(token);
      console.log("Decode here", decoded);



      const newSecurityObj = {
        userName: decoded.userName,
        isAuthenticated: decoded.isAdmin==="admin",
        claim: decoded.claim,
        userEmail: decoded.userEmail,
      };
      this.authService.securityObj = newSecurityObj;
      this.securityObj = newSecurityObj;
    }
  }

}
