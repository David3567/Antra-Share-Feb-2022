import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  hide: boolean = true;
  regForm: FormGroup;
  usernameStatus: string;
  emailStatus: string;


  constructor(private build: FormBuilder,
    private router: Router,
    private regService: RegisterService) { }

  get username() {
    return this.regForm.get('username');
  }
  get email() {
    return this.regForm.get('email');
  }
  // get passwordGroup() {
  //   return this.regForm.get('passwordGroup');
  // }
  get confirm() {
    return this.regForm.get('confirm');
  }
  get password() {
    return this.regForm.get('password');
  }

  ngOnInit(): void {
    this.regForm = this.build.group({
      username: ["", [Validators.minLength(5), Validators.maxLength(12), Validators.required], this.checkUsernameExists()],
      email: ["", [Validators.email, Validators.required], this.checkEmailExists()],
      password: ["", [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]],
      confirm: ["", [Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]]
    },
      {
        validator: this.matchPassword
      }

    );
  }

  onSubmit(signUpForm: FormGroup) {
    console.log(signUpForm.value);
    this.router.navigate(['/login']);
  }

  // matchPassword(password: string, confirm: string) {
  //   // return (group: FormGroup) => {
  //   //   return group.controls[password].value !== group.controls[confirm].value ? group.controls[confirm].setErrors({ notMatch: true }) : null;

  //   // }
  // }

  matchPassword: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    return group.get('password').value !== group.get('confirm').value ? { 'notMatch': true } : null;
  }

  checkUsernameExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.regService.getUserByUsername(control.value)
        }),
        map(val => {
          return val ? { userNameExists: true } : null;
        })
      );
    }
  }

  checkEmailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.regService.getUserByEmail(control.value)
        }),
        map((val) => {
          return val ? { emailExists: true } : null;
        })
      );
    }
  }
}
