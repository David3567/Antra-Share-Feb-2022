import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors, AbstractControl, AsyncValidatorFn } from '@angular/forms';
import { RegisterService } from 'src/app/core/register.service';
import {
  debounceTime,
  map,
  tap,
  switchMap,
  first,
  take,
  distinctUntilChanged,
  mapTo,
  catchError,
} from 'rxjs/operators';
import { Observable, of, timer } from 'rxjs';
import { AccountService } from 'src/app/core/account.service';
import { NewUser } from 'src/app/interface/newuser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required,
    Validators.minLength(5),
    Validators.maxLength(12),
    ],
    [this.myUsernameAsyncValidator()],
    ],
    email: ['', [Validators.required,
    Validators.email],
    [this.myEmailAsyncValidator()],
  ],
    passwd: ['', [Validators.required,
    Validators.pattern("^(?=.*[A-Z])(?=.*[$@$!%*?&~]).{5,}")]],
    confirm: ['', [Validators.required,]],
  },
    {
      validators: this.matchPassword,
    }
  );

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get passwd() {
    return this.form.get('passwd');
  }

  get confirm() {
    return this.form.get('confirm');
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private registerService: RegisterService,
    private accountService: AccountService) { }

  ngOnInit(): void { }


  onSubmit() {
    const account: NewUser = {
      userName: this.username?.value,
      userEmail: this.email?.value,
      password: this.passwd?.value,
      userRole: 'user',
    };
    this.accountService.addNewAccount(account).subscribe((data: NewUser)=>{
      console.log(data);
    });
    this.router.navigate(['']);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const passwd = group.get('passwd')?.value;
    const confirm = group.get('confirm')?.value;

    return passwd !== confirm ? { notMatch: true } : null;
  }

  private myUsernameAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(2000).pipe(
        switchMap((val: any) => {
          console.log(1111111);
          return this.registerService.getUsername(control.value);
        }),
        tap(console.log),
        mapTo({ hasuser: true }),
        catchError((err) => of(null))
      );
    };
  }

  private myEmailAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(2000).pipe(
        switchMap((val: any) => {
          console.log(1111111);
          return this.registerService.getEmail(control.value);
        }),
        tap(console.log),
        mapTo({ hasemail: true }),
        catchError((err) => of(null))
      );
    };
  }
}

// export function myAsyncValidator(
//   registerService: RegisterService
// ): AsyncValidatorFn {
//   return (control: AbstractControl): Observable<ValidationErrors | null> => {
//     console.log(control);
//     return registerService.getUsername(control.value).pipe(
//       map((result: any) => {
//         console.log(result);
//         return result ? null : { hasuser: true };
//       })
//     );
//   };
// }