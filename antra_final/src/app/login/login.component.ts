import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());
  }

  buildform(): {} {
    return {
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      password: ['', [Validators.required, Validators.minLength(5), passwordValidator(/^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z])(?=.*?[!@#\$&*~])./)]]
    };
  }

  onLogIn() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
    else {
      console.log('Invalid form');
    }
  }
}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function passwordValidator(regex: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!regex.test(control.value)) {
      return { regex: true };
    }
    return null;
  };
}