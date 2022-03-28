import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, mapTo, Observable, of, switchMap, tap, timer } from 'rxjs';
import { UserValidatorService } from 'src/app/services/user-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  emailError: string;
  nameError: string;
  regForm: FormGroup;

  constructor(private build: FormBuilder,
    private router: Router,
    private checkService: UserValidatorService) { }

  ngOnInit(): void {
    this.regForm = this.build.group({
      username: ["", [, Validators.minLength(5), Validators.maxLength(12), Validators.required], this.userNameValidator()],
      email: ["", [Validators.email, Validators.required], this.userEmailValidator()],
      password: ["", [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]],
      confirm: ["", Validators.required]
    });
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

  userEmailValidator(): AsyncValidatorFn {
    return (group: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.checkService.checkUserEmail(group.value).pipe(
            tap((data: string) => { this.emailError = data }),
            map((data: string) => { return data ? { isDuplicate: true } : null }),
            catchError(err => {
              throw ({ message: err.error });
            })
          )
        })
      )
    }
  }

  userNameValidator(): AsyncValidatorFn {
    return (group: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.checkService.checkUserName(group.value).pipe(
            tap((data: string) => { this.nameError = data }),
            map((data: string) => { return data ? { isDuplicate: true } : null }),
            catchError(err => {
              throw ({ message: err.error });
            })
          )
        })
      )
    }
  }

}
