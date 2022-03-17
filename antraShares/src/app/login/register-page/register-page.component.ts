import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  get confirmPW() {
    return this.form.get('confirmPW');
  }
  get email() {
    return this.form.get('email');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());

    // this.username?.valueChanges.subscribe((val) => {
    //   this.password?.setValue(val);
    // });
  }

  buildform() {
    return {
      username: ['', Validators.required],
      password: [],
      confirmPW:[],
      email:[]
    };
  }

  onSubmit() {
    console.log(this.username?.value)
    console.log(this.password?.value)
    console.log(this.confirmPW?.value)
    console.log(this.email?.value)
  }
}
