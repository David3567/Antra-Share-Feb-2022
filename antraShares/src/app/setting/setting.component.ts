import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../services/security.service';
import { VariableValue } from '../services/variable.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  constructor(
    private router: Router,
    private variable: VariableValue,
    private securityService: SecurityService
  ) {}

  ngOnInit(): void {}
  onLogout() {
    this.securityService.logout();
    this.variable.login = false;
    this.router.navigate(['']);
  }
}
