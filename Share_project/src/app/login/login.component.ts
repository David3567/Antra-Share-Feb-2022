import { Component, OnDestroy, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { tokenInfo } from './models/tokenInfo';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  check = true;
  loginForm: FormGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  hide = true;

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    const afterLogin = () => {
        if (this.auth.isLoggedIn()) {
          const userRole = this.auth.getUserInfo().userRole;
          console.log(userRole);
          if (userRole === 'admin'){
            this.toAdmin();
          }
          else if (userRole === 'user'){

            this.toNewsfeed();
          }
      }
    }
    this.Login()?.add(afterLogin);
    
  }

  toRegister() {
    this.router.navigate(['/register'])
  }

  Login() {
    const val = this.loginForm.value;

    // if(admin.getName() === name && admin.getPass() === pass) {
    //   console.log("admin");
    //   this.toAdmin();
    // }
    // else if (user.getName() === name && user.getPass() === pass) {
    //   console.log("user");
    //   this.toNewsfeed();
    // }
    if (val.username && val.password) {
      return this.auth.login(val.username, val.password)
    }
    else{
      return null;
    }
  }

  private toAdmin() {
    this.router.navigate(['/admin']);
  }

  private toNewsfeed() {
    this.router.navigate(['/newsfeed']);
  }

  checkBox(check:boolean) {
    console.log(check)
    this.check = !check;
  }

  ngOnDestroy(): void {
    
  }

}
