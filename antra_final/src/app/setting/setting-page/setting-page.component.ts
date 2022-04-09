import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/core/login.service';

@Component({
  selector: 'app-setting-page',
  templateUrl: './setting-page.component.html',
  styleUrls: ['./setting-page.component.scss']
})
export class SettingPageComponent implements OnInit {

  logInUrl: string = 'login';

  constructor(
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onLogOut() {
    this.router.navigateByUrl(this.logInUrl);
    localStorage.removeItem('bearerToken');
  }

}
