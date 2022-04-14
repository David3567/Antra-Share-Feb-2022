import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { MatCard } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, Observable, of, switchMap, tap, timer } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppUser } from 'src/app/core/services/interface/app-user';
import { AppUserAuth } from 'src/app/core/services/interface/app-user-auth';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  hide: boolean = true;

  user: AppUser = new AppUser();
  securityObj: AppUserAuth | null = null;
  returnUrl: string | null = '';
  error: string = "";
  get useremail() {
    return this.form.get('useremail');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private app: AppComponent
  ) {
    this.form = this.fb.group(
      {
        useremail: new FormControl('', [
          Validators.required,
          this.extraCheckUserEmail(),
        ]),
        password: new FormControl('', [
          Validators.required,
          this.extraCheckPassword(),
        ]),
      },
      { 
        // asyncValidator: this.validateUserIsAuthenticated()
       }
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  onSubmit() {
    // console.log(this.form.value);
    this.user = {
      userEmail: this.form.value.useremail,
      password: this.form.value.password,
    };
    this.authService.login(this.user).subscribe(
      (info) => {
        this.securityObj = info.body;
        this.app.onlogin();
        console.log(this.securityObj);
        if (this.returnUrl) {
          this.router.navigateByUrl(this.returnUrl);
        } 
        else {
          this.router.navigate(['newsfeed']);
        }
      },
      () => {
        this.securityObj = new AppUserAuth();
      }
    );
  }

  onRegister() {
    this.router.navigate(['register']);
  }

  extraCheckUserEmail(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const email =
        /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      if (!email.test(control.value)) {
        return { email: true };
      } else return null;
    };
  }

  extraCheckPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const specialLeter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (!specialLeter.test(control.value)) {
        return { specialLeter: true };
      } else return null;
    };
  }

  // validateUserIsAuthenticated(): AsyncValidatorFn {
  //   return (group: AbstractControl): Observable<ValidationErrors | null> => {
  //     const obj = {
  //       userEmail: group.value.useremail,
  //       password: group.value.password,
  //     };

  //     return timer(500).pipe(
  //       switchMap(() => {
  //         return this.authService.login(obj).pipe(
  //           tap((data) => console.log('data in validater: ', data)),
  //           map((data) => null),
  //           catchError((err: any) => {
  //             // console.log(err.error);
  //             this.error = err.error;
  //             return of({ errormessage: err.error });
  //           })
  //         );
  //       })
  //     );
  //   };
  // }
}
