import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  AsyncValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from 'src/app/interfaces/user.model';
import { Users } from 'src/app/interfaces/userlist.model';
import { AccountService } from 'src/app/services/account.service';
import { AsyncValidatorService } from 'src/app/services/async-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['../login.component.css'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPW() {
    return this.form.get('confirmPW');
  }
  get email() {
    return this.form.get('email');
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private asyncValidatorService: AsyncValidatorService,
    private accountService: AccountService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform(), {
      validators: matchPassword,
    });
  }

  buildform() {
    return {
      username: [
        '',
        [userLenth(5, 12), Validators.required],
        [this.myUsernameAsyncValidator()],
      ],
      password: ['', [characterCheck(5)]],
      confirmPW: ['', Validators.required],
      email: ['', [Validators.email], [this.myEmailAsyncValidator()]],
    };
  }

  onSubmit() {
    const newAccount: User = {
      userName: this.username?.value,
      userEmail: this.email?.value,
      password: this.password?.value,
      userRole: 'user',
    };
    this.accountService.postNewAccount(newAccount).subscribe((newAccount:User)=>{
      console.log(newAccount);
    })
    this.router.navigate(['']);
    // console.log(this.form.value);
    // console.log(this.username?.value);
    // console.log(this.password?.value);
    // console.log(this.confirmPW?.value);
    // console.log(this.email?.value);
  }
  onGoback() {
    this.router.navigate(['']);
  }
  private myUsernameAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.asyncValidatorService.getCheckUser(control.value).pipe(
        map((result: any) => {
          return result ? { hasuser: true } : null;
        }),
        catchError((err) => of(null))
      );
    };
  }
  private myEmailAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.asyncValidatorService.getCheckEmail(control.value).pipe(
        map((result: any) => {
          return result ? { hasemail: true } : null;
        }),
        catchError((err) => of(null))
      );
    };
  }
}
//validator
function characterCheck(minlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const lowerCase = new RegExp('^(?=.*?[a-z])');
    const upperCase = new RegExp('^(?=.*?[A-Z])');
    const number = new RegExp('^(?=.*?[0-9])');
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!lowerCase.test(control.value)) {
      return { needLower: true };
    } else if (!upperCase.test(control.value)) {
      return { needUpper: true };
    } else if (!number.test(control.value)) {
      return { needNumber: true };
    } else if (!specialChar.test(control.value)) {
      return { needSpecial: true };
    } else if (control.value.length < minlen) {
      return { minlen: true, minlength: minlen };
    }
    return null;
  };
}
function userLenth(minlen: number, maxlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length < minlen || control.value.length >= maxlen) {
      return { minlen: true, minlength: control.value.length };
    }
    return null;
  };
}
function matchPassword(group: FormGroup): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPW')?.value;

  return password !== confirm ? { notMatch: true } : null;
}
//async validator
