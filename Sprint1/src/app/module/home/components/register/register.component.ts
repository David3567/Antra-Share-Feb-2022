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
import { catchError, map, Observable, of, switchMap, tap, timer } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { AppUserAuth } from 'src/app/core/services/interface/app-user-auth';
import { Users } from 'src/app/core/services/interface/register.model';
import { UserlistService } from 'src/app/services/userlist.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  hide: boolean = true;
  hideconfirm: boolean = true;
  error: string = "";

  // user: AppUser = new AppUser();
  securityObj: AppUserAuth = new AppUserAuth();
  returnUrl: string | null = '';
  user!: Users;

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
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group(
      {
        name: new FormControl('', Validators.required),
        username: new FormControl('', Validators.required),
        useremail: new FormControl('', [
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.required,
          this.extraCheckUserEmail(),
        ]),
        password: new FormControl('', [
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.required,
          this.extraCheckPassword(),
        ]),
        passwordconfirm: new FormControl('', [
          Validators.minLength(5),
          Validators.maxLength(30),
          Validators.required,
        ]),
        userrole: new FormControl('', Validators.required),
        age: new FormControl(''),
        gender: new FormControl(''),
        phone: new FormControl(''),
      },
      {
        asyncValidator: this.validateUserIsAuthenticated(),
      }
    );
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
  }

  onSubmit() {
    console.log(this.form.value);
    this.user = {
      // _id: this.form.value._id,
      userName: this.form.value.username,
      userEmail: this.form.value.useremail,
      password: this.form.value.password,
      name: this.form.value.name,
      userRole: this.form.value.userrole,
      age: this.form.value.age,
      gender: this.form.value.gender,
      phone: this.form.value.phone,
      // __v: this.form.value.__v,
    };
    this.authService.register(this.user).subscribe((info) => {
      // this.securityObj = info.body;
      if (this.returnUrl) {
        this.router.navigateByUrl(this.returnUrl);
      }else{
      this.router.navigate(['login']);
        }
      },
    //   () => {
    //     this.securityObj = new AppUserAuth();
    // }
    );
  }

  onLogin() {
    this.router.navigate(['login']);
  }

  extraCheckPassword(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const specialLeter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (!specialLeter.test(control.value)) {
        return { specialLeter: true };
      } else return null;
    };
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

  validateUserIsAuthenticated(): AsyncValidatorFn {
    return (group: AbstractControl): Observable<ValidationErrors | null> => {
      const obj = {
        userEmail: group.value.useremail,
        password: group.value.password,
        userName: group.value.username,
        name: group.value.name,
        userRole: group.value.userrole,
        age: group.value.age,
        gender: group.value.gender,
        phone: group.value.phone,
      };

      return timer(500).pipe(
        switchMap(() => {
          return this.authService.registercheckuseremail(obj.userEmail).pipe(
            tap((data) => {
              console.log('data in validater: ', data);
              this.error = data.body;
          }),
            map((data) => null),
            catchError((err: any) => {
              return of({ errormessage: err.error });
            })
          );
        })
      );
    };
  }
}
