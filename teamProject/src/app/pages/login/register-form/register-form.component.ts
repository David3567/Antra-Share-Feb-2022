import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
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
  successMessage = '';
  errorMessage = '';

  passwordPattern = '(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}';

  constructor(private formbuilder: FormBuilder, private authenService: AuthenService, private cd: ChangeDetectorRef) {

    this.authenService.getAllUserNames().subscribe(
      (data) => {
        console.warn(data[0]);
      }
    );

    this.authenService.getAllUserEmails().subscribe(
      (data) => {
        console.warn(data[0]);
      }
    );

  }

  ngOnInit() {
      this.registerForm = this.formbuilder.group({
      username:['yushengjr', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email:['kru251145@gmail.com', [Validators.required, Validators.email]],
      password:['Kru251145', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]],
      confirmPassword:['Kru251145', [Validators.required]]
    }, {validator: MustMatch('password', 'confirmPassword')});
    this.cd.detectChanges();
  }

  onSubmit() {
  
    // this.authenService.register(this.registerForm.value.username, this.registerForm.value.email, this.registerForm.value.password, 'user').subscribe((
    // data) => {
    // console.log(data);
    // this.successMessage = 'Registered Successfully!';
    // this.cd.markForCheck();
    // },
    // (err) => {
    //   this.errorMessage = err.error;
    //   console.log(err.error);
    //   this.cd.markForCheck();
    // });
  }
}
