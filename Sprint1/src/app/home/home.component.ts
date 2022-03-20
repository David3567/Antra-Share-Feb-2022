import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  form!: FormGroup;

  hide: boolean = true;

  constructor(private router: Router, private fb:FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.minLength(5), Validators.maxLength(16), Validators.required, this.extraCheckUsername()]),
      password: new FormControl('', [Validators.minLength(5), Validators.maxLength(16), Validators.required, this.extraCheckPassword()]),
    },{});
  }

  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  onSubmit() {
    console.log(this.form.value);
    this.router.navigate(['newsfeed']);
  }

  onRegister(){
    this.router.navigate(['register']);
  }

  extraCheckUsername(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
    return null;
    }
  }
  
  extraCheckPassword(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
      const specialLeter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if(!specialLeter.test(control.value)){
        return { specialLeter : true}
      }
      else return null;
    };
  }

}
