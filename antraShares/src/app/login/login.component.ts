import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AppUser, AppUserAuth } from '../interfaces/app-user.model';
import { SecurityService } from '../services/security.service';
import { VariableValue } from '../services/variable.service';
import { fromEvent, Observable, of, timer } from 'rxjs';
import { catchError, debounceTime, map, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  hide = true;
  user: AppUser = new AppUser();
  securityObj!: AppUserAuth;
  returnUrl!: string;
  constructor(
    private securityService: SecurityService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private variable: VariableValue
  ) {
    this.form = this.fb.group(
      {
        username: new FormControl('', [
          Validators.minLength(5),
          Validators.required,
          Validators.maxLength(100),
        ]),
        password: new FormControl('', [
          Validators.minLength(5),
          Validators.required,
          this.checkUppercaseLetter(),
          this.checkSpecialLetter(),
        ]),
      },
      // {
      //   asyncValidator: this.validateUserIsAuthenticated(),
      // }
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('login')!;
  }

  onSubmit() {
    this.user = {
      userEmail: this.form.value.username,
      password: this.form.value.password,
    };

    this.securityService.login(this.user).subscribe(
      (info) => {
        this.securityObj = info.body;
        this.variable.login = true;
        this.router.navigate(['home']);
      },
      () => {
        this.securityObj = new AppUserAuth();
      }
    );
  }

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  checkSpecialLetter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const specialLeter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (!specialLeter.test(control.value)) {
        return { specialLeter: true };
      } else return null;
    };
  }
  checkUppercaseLetter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const uppercaseLetter = /[A-Z]+/;
      if (!uppercaseLetter.test(control.value)) {
        return { uppercaseLetter: true };
      } else return null;
    };
  }
  onLoginBtn() {
    this.variable.login = true;
    console.log(this.variable.login);
    this.router.navigate(['home']);
  }
  onRegisterBtn() {
    this.router.navigate(['register']);
  }
  // validateUserIsAuthenticated(): AsyncValidatorFn {
  //   return (group: AbstractControl): Observable<ValidationErrors | null> => {
  //     const obj = {
  //       userEmail: group.value.username,
  //       password: group.value.password,
  //     };

  //     return timer(500).pipe(
  //       switchMap(() => {
  //         return this.securityService.login(obj).pipe(
  //           tap((data) => console.log('data in validater: ', data)),
  //           map((data) => null),
  //           catchError((err: any) => {
  //             return of({ errormessage: err.error });
  //           })
  //         );
  //       })
  //     );
  //   };
  // }
}
