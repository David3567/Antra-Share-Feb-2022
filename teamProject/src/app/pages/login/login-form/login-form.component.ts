import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  successMessage = '';
  errorMessage = '';
  isLoadingOne = false;

  loginForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.minLength(5),Validators.pattern("(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}"), Validators.required]]
    }
  );

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }


  constructor(private fb:FormBuilder, private router: Router, private authenService: AuthenService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void { }

  onSubmit(){
    console.log(this.loginForm.value);

    this.authenService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      (data) => {
        console.log(data.userName);
        localStorage.setItem('username', data.userName);
        localStorage.setItem('email', data.userEmail);
        localStorage.setItem('token', data.bearerToken);
        this.authenService.saveJwtToken(data.bearerToken);
        const token = localStorage.getItem('token');
        if(token!=null)
        {
          console.log(this.authenService.decodeToken(token))
        }

        setTimeout(() => {
          this.router.navigateByUrl('default/newsfeed');
        }, 2000);
        },
      (err) => {
        setTimeout(() => {
          this.errorMessage = err.error;
          this.cd.markForCheck();
          setTimeout(() => location.reload(), 1000);
        }, 2000);
      });
  }

  loadOne(): void {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 2000);
  }
}
