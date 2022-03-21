import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableValue } from '../services/variable.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css'],
})
export class SettingComponent implements OnInit {
  constructor(private router: Router, private variable: VariableValue) {}

  ngOnInit(): void {}
  onLogout() {
    this.variable.login = false;
    this.router.navigate(['']);
  }
}
