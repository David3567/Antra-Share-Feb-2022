import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
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
    console.log(this.form.value);
    // this.api.createUser(this.form.value)
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
