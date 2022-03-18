import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private build: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.build.group({
      username: ['', [Validators.minLength(5), Validators.maxLength(12), Validators.required]],
      password: ["",[Validators.minLength(5),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]]
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit(login: FormGroup) {
    console.log(login.value);
  }

}
