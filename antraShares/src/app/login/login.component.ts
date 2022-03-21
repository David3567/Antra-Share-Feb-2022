import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: new FormControl('', [Validators.minLength(5), Validators.required, Validators.maxLength(12)]),
      password: new FormControl('', [Validators.minLength(5), Validators.required, this.checkUppercaseLetter(), this.checkSpecialLetter()]),
    }, {});
  }



  onSubmit() {
    console.log(this.form.value);
  }
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
  checkSpecialLetter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const specialLeter = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      if (!specialLeter.test(control.value)) {
        return { specialLeter: true }
      }
      else return null;
    };
  }
  checkUppercaseLetter(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const uppercaseLetter = /[A-Z]+/;
      if (!uppercaseLetter.test(control.value)) {
        return { uppercaseLetter: true }
      }
      else return null;

    };
  }

}
