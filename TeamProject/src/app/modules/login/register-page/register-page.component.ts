import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormGroup, Validators, ValidationErrors  } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError,Observable, of, timer, switchMap } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { AppUserAuth } from 'src/app/interfaces/user-auth.model';
import { AppNewUser } from 'src/app/interfaces/users.model';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  regForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = "";

  user: AppNewUser = new AppNewUser();
  securityObj: AppUserAuth = null;
  returnUrl: string = 'newsfeed';

  userNameCheck: string;
  userEmailCheck: string;

  usernameStatus: boolean = false;

  constructor(private build: FormBuilder, 
              private router: Router,
              private existService: RegisterService,
              private http: HttpClient
              ) { 

                // this.authenService.getAllUserNames().subscribe(
                //   (data) => {
                //     console.log(data);
                //     this.DBuserNames = data;
                //   }
                // );

                // this.authenService.getAllUserEmails().subscribe(
                //   (data) => {
                //     console.log(data);
                //     this.DBuserEmails = data;
                //   }
                // );

              }

  ngOnInit(): void {
    this.regForm = this.build.group({
      username: ["", [Validators.minLength(5), Validators.maxLength(12), Validators.required], this.usernameValidator()],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]],
      confirm: ["", Validators.required]
    });
  }

  // checkIfUsernameExists(username: string): Observable<boolean> {
  //   return of(this.DBuserNames.includes(username)).pipe(delay(1000));
  // }

  // checkIfUseremailExists(email: string): Observable<boolean> {
  //   return of(this.DBuserEmails.includes(email)).pipe(delay(1000));
  // }

  usernameValidator(): AsyncValidatorFn {
    return (group: AbstractControl): Observable<ValidationErrors | null> => {
      return timer(500).pipe(
        switchMap(() => {
          return this.existService.checkyByUsername(group.value).pipe(
            tap((data: string) => { this.userNameCheck = data }),
            map((data: string) => { return data ? { isDuplicated: true } : null }),
            // catchError(err => {
            //   throw ({ message: err.error });
            // })
          )
        })
      )
    }
  }

  // useremailValidator(): AsyncValidatorFn {
  //   // return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //   //   return this.existService.checkyByUseremail(control.value).pipe(
  //   //     map(res => {return res ? { error: true, isDuplicated: true } : null;}),
  //   //     catchError(err => {
  //   //       throw ({ message: err.error });
  //   //     })
  //   //   );
  //   // };
  // }


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

  onSubmit(regForm: FormGroup) {
    console.log(regForm.value);
    this.router.navigate(['/login']);
    // console.log(this.checkIfUsernameExists(regForm.value.username));
    
    // this.user = {
    //   "username": this.regForm.value.username,
    //   "userEmail": this.regForm.value.email,
    //   "password": this.regForm.value.password,
    // }
    // console.log(this.user);

    // this.authenService.register(this.user).subscribe(
     
    //   (info) => {
    //     this.successMessage = 'Registered Successfully!'
    //     this.securityObj = info.body;
    //     this.router.navigateByUrl("/");
    //   },
    //   (err) => { this.errorMessage = err.error },
    // );

    console.log("managed to be here");


  }

}
