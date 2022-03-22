import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
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
import { AsyncValidatorService } from './services/async-validator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  get email() {
    return this.form.get('email');
  }

  constructor(
    private fb: FormBuilder,
    private asyncValidatorService: AsyncValidatorService
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email],
        [this.myAsyncValidator()],
      ],
    });

    // this.asyncValidatorService
    //   .getUser('jr.hang@gmail.com')
    //   .pipe(tap(console.log))
    //   .subscribe();
  }

  private myAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(10).pipe(
        switchMap((val: any) => {
          console.log(1111111);
          return this.asyncValidatorService.getUser(control.value);
        }),
        // tap(console.log),
        mapTo({ invalidAsync: true }),
        catchError((err) => of(null))
      );
    };
  }

  // private myAsyncValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     return control.valueChanges.pipe(
  //       debounceTime(1000),
  //       distinctUntilChanged(),
  //       switchMap((val: any) => {
  //         return this.asyncValidatorService.getUser(val);
  //       }),
  //       map((res: any) => {
  //         console.log(res);
  //         return res ? { invalidAsync: true } : null;
  //       }),
  //       take(1)
  //     );
  //   };
  // }

  // private myAsyncValidator(): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     return this.asyncValidatorService.getUser(control.value).pipe(
  //       map((result: any) => {
  //         console.log(result);
  //         return result ? { invalidAsync: true } : null;
  //       })
  //     );
  //   };
  // }
}

export function myAsyncValidator(
  asyncValidatorService: AsyncValidatorService
): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    console.log(control);
    return asyncValidatorService.getUser(control.value).pipe(
      map((result: any) => {
        console.log(result);
        return result ? null : { invalidAsync: true };
      })
    );
  };
}
