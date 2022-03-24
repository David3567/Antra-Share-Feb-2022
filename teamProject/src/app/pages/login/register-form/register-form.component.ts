import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from './mustMatch.validator';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  showSuccessMessage = true;
  showErrorMessage = true;
  errorMessage = '';

  passwordPattern = '(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}';

  constructor(private formbuilder: FormBuilder, private authenService: AuthenService) {
  }

  ngOnInit() {
      this.registerForm = this.formbuilder.group({
      username:['kru24629', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email:['kru24629@gmail.com', [Validators.required, Validators.email]],
      password:['Kru24629', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]],
      confirmPassword:['Kru24629', [Validators.required]]
    }, {validator: MustMatch('password', 'confirmPassword')})
  }

  onSubmit() {

    this.authenService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password, 'user').subscribe(
    data => {
    console.log(data);
    this.showSuccessMessage = true;
    },
    err => {
      this.errorMessage = err.error.message;
    });
  }
}
