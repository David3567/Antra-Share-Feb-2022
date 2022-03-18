import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm!:FormGroup;

  get usernameVal() {
    return this.loginForm.get('usernameVal');
  }

  get passwordVal() {
    return this.loginForm.get('passwordVal');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      usernameVal: ['',[customValidator(5,12),Validators.required],[]],
      passwordVal: ['',[Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-+/]).{5,}$"), Validators.required],[]],
    });

  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

}

interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function customValidator(minlen:number, maxlen:number): ValidatorFn {
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
