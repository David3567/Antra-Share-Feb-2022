import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { max } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!: FormGroup;



  get usernameVal() {
    return this.loginForm.get('usernameVal');
  }

  get passwordVal() {
    return this.loginForm.get('passwordVal');
  }

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameVal: ['', [Validators.minLength(5), Validators.maxLength(16), Validators.required], []],
      passwordVal: ['', [Validators.minLength(5), Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-+/]).{5,}$"), Validators.required], []],
    });

  }


  onSubmit() {
    console.log(this.loginForm.value);
  }

  toRegistration() {
    this.router.navigate(['register']);
  }

}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function customValidator(minlen: number, maxlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (control.value.length < minlen) {
      return { minlen: true, minlength: minlen };
    }

    if (control.value.length > maxlen) {
      return { maxlen: true, maxlength: maxlen };
    }

    return null;
  };
}