import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MustMatch } from './mustMatch.validator';
import { AuthenService } from 'src/app/services/authen.service';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  successMessage = '';
  errorMessage = '';
  isLoadingOne = false;

  DBuserNames: string[] = [];
  DBuserEmails: string[] = [];

  passwordPattern = '(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}';

  constructor(private formbuilder: FormBuilder, private authenService: AuthenService, private cd: ChangeDetectorRef, private router: Router) {

    this.authenService.getAllUserNames().subscribe(
      (data) => {
        this.DBuserNames = data;
        // console.warn(data[0]);
        // console.log(this.DBuserNames);
      }
    );

    this.authenService.getAllUserEmails().subscribe(
      (data) => {
        this.DBuserEmails = data;
        // console.warn(data[0]);
        // console.log(this.DBuserEmails);
      }
    );
  }

  ngOnInit() {
      this.registerForm = this.formbuilder.group({
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)], this.usernameValidator()],
      email:['', [Validators.required, Validators.email], this.emailValidator()],
      password:['', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]],
      confirmPassword:['', [Validators.required]]
    }, {validator: MustMatch('password', 'confirmPassword')});
    this.cd.detectChanges();
  }

  checkIfUsernameExists(username: string): Observable<boolean> {
    return of(this.DBuserNames.includes(username)).pipe(delay(1000));
  }

  usernameValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfUsernameExists(control.value).pipe(
        map(res => {
          return res ? { error: true, duplicated: true } : null;
        })
      );
    };
  }

  checkIfEmailExists(email: string): Observable<boolean> {
    return of(this.DBuserEmails.includes(email)).pipe(delay(1000));
  }

  emailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.checkIfEmailExists(control.value).pipe(
        map(res => {
          return res ? { error: true, duplicated: true } : null;
        })
      );
    };
  }

  onSubmit() {

    this.authenService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password, 'user').subscribe((
    data) => {

    setTimeout(() =>
    {
      this.successMessage = 'Registered Successfully!';
      this.cd.markForCheck();
      this.router.navigateByUrl('/');
    },
    2000);
    },
    (err) => {
      this.errorMessage = err.error;
      this.cd.markForCheck();
    });
  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 3000);
  }
}
