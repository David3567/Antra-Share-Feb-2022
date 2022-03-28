import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MustMatch } from './mustMatch.validator';
import { AuthenService } from 'src/app/services/authen.service';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  successMessage = '';
  errorMessage = '';

  DBuserNames: string[] = [];
  DBuserEmails: string[] = [];

  passwordPattern = '(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}';

  constructor(private formbuilder: FormBuilder, private authenService: AuthenService, private cd: ChangeDetectorRef) {

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
      username:['yushengjr', [Validators.required, Validators.minLength(5), Validators.maxLength(12)], this.usernameValidator()],
      email:['kru25113@gmail.com', [Validators.required, Validators.email], this.emailValidator()],
      password:['Kru251145', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]],
      confirmPassword:['Kru251145', [Validators.required]]
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
    console.log(this.DBuserNames);

    this.authenService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password, 'user').subscribe((
    data) => {
    console.log(data);
    this.successMessage = 'Registered Successfully!';
    this.cd.markForCheck();
    },
    (err) => {
      this.errorMessage = err.error;
      console.log(err.error);
      this.cd.markForCheck();
    });
  }
}
