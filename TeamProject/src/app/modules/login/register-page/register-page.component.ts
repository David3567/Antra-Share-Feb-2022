import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  regForm: FormGroup;

  constructor(private build: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.regForm = this.build.group({
      username: ["", [, Validators.minLength(5), Validators.maxLength(12), Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      password: ["", [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]],
      confirm: ["", Validators.required]
    });
  }

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

  onSubmit(signUpForm: FormGroup) {
    console.log(signUpForm.value);
    this.router.navigate(['/login']);
  }

}
