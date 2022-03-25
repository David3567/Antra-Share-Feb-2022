import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
  AsyncValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, switchMap, tap, timer } from 'rxjs';
import { AppUserAuth } from 'src/app/interfaces/user-auth.model';
import { AppUser } from 'src/app/interfaces/users.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = "";

  user: AppUser = new AppUser();
  securityObj: AppUserAuth = null;
  returnUrl: string = 'newsfeed';


  get usernameVal() {
    return this.loginForm.get('usernameVal');
  }

  get passwordVal() {
    return this.loginForm.get('passwordVal');
  }

  constructor(private fb: FormBuilder, 
              private router: Router,
              private securityService: LoginService,
              private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameVal: ["", [Validators.required, Validators.email]],
      passwordVal: ["", [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-+/]).{5,}$"), Validators.required], []],
    });

  }


  onSubmit() {
    
    
    this.user = {
      "userEmail": this.loginForm.value.usernameVal,
      "password": this.loginForm.value.passwordVal,
    }

    this.securityService.login(this.user).subscribe(
      (info) => {
        
        this.securityObj = info.body;
        this.router.navigateByUrl(this.returnUrl);
      },
      (err) =>  {this.errorMessage = err.error},
    );

  }

  onRegister() {
    this.router.navigate(['register']);
  }

  validateUserIsAuthenticated(): AsyncValidatorFn {
    return (group: AbstractControl): Observable<ValidationErrors | null> => {
      const obj = {
        userEmail: group.value.username,
        password: group.value.password,
      };

      return timer(500).pipe(
        switchMap(() => {
          return this.securityService.login(obj).pipe(
            tap((data) => console.log("data in validater: ", data)),
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