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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck {
  title = 'antraShares';
  login!: boolean;
  securityObj: AppUserAuth = new AppUserAuth();
  constructor(
    private variable: VariableValue,
    private securityService: SecurityService
  ) {
    this.securityObj = this.securityService.securityObj;
  }
  ngDoCheck(): void {
    this.login = this.variable.login;
  }
}
