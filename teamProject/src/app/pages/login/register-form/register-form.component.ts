import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './mustMatch.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  showMessage = false;

  passwordPattern = '(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}';

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
      this.registerForm = this.formbuilder.group({
      username:['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]],
      confirmPassword:['', [Validators.required]]
    }, {validator: MustMatch('password', 'confirmPassword')})
  }

  onSubmit() {
    this.showMessage = true;
    console.table(this.registerForm.value);
  }
}
