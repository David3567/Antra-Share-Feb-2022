import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-setting-panel',
  templateUrl: './setting-panel.component.html',
  styleUrls: ['./setting-panel.component.css']
})
export class SettingPanelComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogout() {
    const dialog = confirm("Are you sure you want to logout?");
    if (dialog) {
      this.loginService.logout();
      this.router.navigate(['login']);
    }
  }

}
