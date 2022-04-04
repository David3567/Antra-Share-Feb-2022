import {
  DoCheck,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { AppUserAuth } from './interfaces/app-user.model';
import { SecurityService } from './services/security.service';
import { VariableValue } from './services/variable.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'antraShares';
  login!: boolean;
  securityObj: AppUserAuth = new AppUserAuth();
  constructor(
    private variable: VariableValue,
    private securityService: SecurityService,
    private route: Router
  ) {
    this.securityObj = this.securityService.securityObj;
  }
  ngOnInit(): void {
    const token = localStorage.getItem('bearerToken');
    if (token) {
      const decoded: any = jwt_decode(token);

      const newSecurityObj = {
        userName: decoded.userName,
        userEmail: decoded.userEmail,
        userRole: decoded.userRole,
      };
      this.securityService.securityObj = newSecurityObj;
      this.securityObj = newSecurityObj;
    }
  }
  onClickProfile() {
    this.route.navigate(['./profile', this.securityService.getUserName()]);
  }
}
