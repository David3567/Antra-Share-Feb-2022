import { Component, OnInit } from '@angular/core';
import { LoginInfo, admin, user } from './models/loginInfo';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  info = new LoginInfo();
  check = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: any) {

  }

  toRegister() {
    this.router.navigate(['/register'])
  }

  checkLoginInfo(name: string, pass: string) {
    if(admin.getName() === name && admin.getPass() === pass) {
      console.log("admin");
    }
    else if (user.getName() === name && user.getPass() === pass) {
      console.log("user");
    }
  }

  checkBox(check:boolean) {
    console.log(check)
    this.check = !check;
  }

}
