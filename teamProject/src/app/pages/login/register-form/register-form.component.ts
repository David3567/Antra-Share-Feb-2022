import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, of, timer } from 'rxjs';
import { catchError, map, mapTo, switchMap } from 'rxjs/operators';
import { NewUser } from 'src/app/interfaces/newUser.model';
import { AsyncValidatorService } from 'src/app/services/asyncValidator.service';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from './mustMatch.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup = this.formbuilder.group(
    {
      username: ['', [Validators.minLength(5), Validators.maxLength(12), Validators.required]],
      email: ['',
        [Validators.required, Validators.email],
        [this.myAsyncValidator()],
      ],
      password: ['', [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },
    { validator: MustMatch('password', 'confirmPassword') }
  );

  get username(){
    return this.registerForm.get('username');
  }

  get email(){
    return this.registerForm.get('email');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }


  showMessage = false;
  user!: NewUser;


  constructor(private formbuilder: FormBuilder, private userService: UserService,
    private asyncValidator: AsyncValidatorService) {
  }

  ngOnInit() { }

  onSubmit() {
    this.showMessage = true;
    console.table(this.registerForm.value);

    this.user = {
      userName: this.registerForm.value.username,
      userEmail: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userRole: 'user',
      name: this.registerForm.value.username,
      age: 0,
      gender: 'Male',
      phone: 111222333
    };

    this.userService.registerUser(this.user).subscribe((result) => {
      console.log(result);
    });
  }

  private myAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(5000).pipe(
        switchMap((val: any) => {
          console.log(1111111);
          return this.asyncValidator.getUser(control.value);
        }),
        // tap(console.log),
        mapTo({ hasuser: true }),
        catchError((err) => of(null))
      );
    };
  }

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