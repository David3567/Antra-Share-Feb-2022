import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, switchMap, tap, timer } from 'rxjs';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  regForm: FormGroup;
  usernameStatus: string = 'Test';
  emailStatus: string;

  constructor(private build: FormBuilder, 
              private router: Router, 
              private regService: RegisterService) { }

  ngOnInit(): void {
    this.regForm = this.build.group({
      username: ["", [Validators.minLength(5), Validators.maxLength(12), Validators.required], this.checkUsernameExists()],
      email: ["", [Validators.email, Validators.required], this.checkEmailExists()],
      password: ["", [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]],
      confirm: ["", [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]]
    },
    {
      validators: [this.matchPassword]
    }
    );
  }

  get username() {
    return this.regForm.get('username');
  }

  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }

  get confirm() {
    return this.regForm.get('confirm');
  }

  onSubmit(signUpForm: FormGroup) {
    console.log(signUpForm.value);

    this.router.navigate(['/login']);
  }

  matchPassword: ValidatorFn = (group: FormGroup): ValidationErrors | null => {
    return group.get('password').value !== group.get('confirm').value ? {'notMatch': true} : null;
  }

  checkUsernameExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.regService.getUserByUsername(control.value).pipe(
            tap((response: string) => { this.usernameStatus = response }),
            map((response: string) => { return response ? { userNameExists: true } : null }),
            catchError(err => {
              throw ({ errorMessage: err.error });
            })
          )
        })
      );
    }
  }

  checkEmailExists(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.regService.getUserByEmail(control.value).pipe(
            tap((response: string) => { this.emailStatus = response }),
            map((response: string) => { return response ? { emailExists: true } : null }),
            catchError(error => {
              throw ({ errorMessage: error.error });
            })
          )
        })
      );
    }
  }

}
