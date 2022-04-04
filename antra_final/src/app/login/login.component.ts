import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { LoginService } from '../core/login.service';
import { Loginobject } from '../interface/loginobject.model';
import { UserProfile } from '../interface/user-profile.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  userLoginInfo: Loginobject = new Loginobject();
  userProfile: UserProfile = new UserProfile();
  proceedUrl: string = 'news';
  errorText: string = '';

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());
  }

  buildform(): {} {
    return {
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), passwordValidator(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z])(?=.*?[!@#\$&*~])./)]]
    };
  }

  onLogIn() {
    this.userLoginInfo = {
      'userEmail': this.form.value.email,
      'password': this.form.value.password
    }

    this.loginService.getLoginValidation(this.userLoginInfo).subscribe(
      (data) => {
        this.userProfile = data.body;
        this.loginService.setIsAuth(true);
        this.router.navigateByUrl(this.proceedUrl);
        // this.loginService.decodeToken();
        // this.loginService.getCurrentUsername();
      },
      (err) => {
        this.errorText = err.error;
      }
    )


  }
}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function passwordValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!regex.test(control.value)) {
      return { regex: true };
    }
    return null;
  };
}