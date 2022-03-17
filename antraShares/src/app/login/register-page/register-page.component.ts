import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css'],
})
export class RegisterPageComponent implements OnInit {
  form!: FormGroup;
  myForm!: FormGroup;

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

  get numVal() {
    return this.myForm.get('numVal');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform(), {
      validators: matchPassword,
    });
    this.myForm = this.fb.group({
      numVal: ['', [characterCheck(6)], []],
    });

    // this.username?.valueChanges.subscribe((val) => {
    //   this.password?.setValue(val);
    // });
  }

  buildform() {
    return {
      username: ['', Validators.required],
      password: ['', [characterCheck(6)]],
      confirmPW: ['', Validators.required],
      email: ['',[Validators.email]],
    };
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.username?.value);
    console.log(this.password?.value);
    console.log(this.confirmPW?.value);
    console.log(this.email?.value);
  }
}
interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}

function characterCheck(minlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const lowerCase = new RegExp('^(?=.*?[a-z])');
    const upperCase = new RegExp('^(?=.*?[A-Z])');
    const number = new RegExp('^(?=.*?[0-9])');
    const specialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (!lowerCase.test(control.value)) {
      return { needLower: true };
    } else if (!upperCase.test(control.value)) {
      return { needUpper: true };
    } else if (!number.test(control.value)) {
      return { needNumber: true };
    } else if (!specialChar.test(control.value)) {
      return { needSpecial: true };
    } else if (control.value.length < minlen) {
      return { minlen: true, minlength: minlen };
    }
    return null;
  };
}
function matchPassword(group: FormGroup): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPW')?.value;

  return password !== confirm ? { notMatch: true } : null;
}
