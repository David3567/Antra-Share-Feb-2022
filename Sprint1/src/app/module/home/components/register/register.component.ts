import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: ['', [Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(12), 
    ]],
    email: ['', [Validators.required,
       Validators.email]],
    passwd: ['', [Validators.required,
      Validators.pattern("^(?=.*[A-Z])(?=.*[$@$!%*?&~]).{5,}")]],
    confirm: ['', [Validators.required,]],
  },
  {
    validators: this.matchPassword,
  }
  );

  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get passwd() {
    return this.form.get('passwd');
  }

  get confirm() {
    return this.form.get('confirm');
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.form.value);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const passwd = group.get('passwd')?.value;
    const confirm = group.get('confirm')?.value;

    return passwd !== confirm ? { notMatch: true } : null;
  }

}