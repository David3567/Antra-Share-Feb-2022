import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUser } from 'src/app/admin/models/createUser.model';
import { apiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(12)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[$@$!%*?&~]).{8,}")]],
    confirm: ['', [Validators.required,]],
  }, { validators: this.matchPassword }
  );

  register: any = {};

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirm() {
    return this.form.get('confirm');
  }

  constructor(private fb: FormBuilder, private router: Router, private api: apiService) { }

  ngOnInit(): void {}

  onSubmit() {
    this.register.name = this.form.value.username;
    this.register.userName = this.form.value.username;
    this.register.userEmail = this.form.value.email;
    this.register.password = this.form.value.password;
    this.register.userRole = "user";
    this.register.age = 24;
    this.register.gender = "Male"; 
    this.register.phone = 3333333333;

    console.log("form register before request: ", this.register)
    this.api.createUser(this.register);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;

    return password !== confirm ? { notMatch: true } : null;
  }

  toLogin() {
    this.router.navigate(['/login'])
  }

}
