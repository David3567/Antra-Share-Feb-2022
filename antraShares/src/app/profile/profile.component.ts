import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import {
  FormGroup, FormBuilder, Validators, AbstractControl,
  ValidationErrors, FormControl
} from '@angular/forms';
import { MatError } from '@angular/material/form-field';

const THUMBUP_ICON =
  `
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.` +
  `44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5` +
  `1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/>
  </svg>
`;

// export interface Tile {
//   color: string;
//   text: string;
// }

const color = "lightblue";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hide = true;
  form!: FormGroup;
  myForm!: FormGroup;
  selectedGender!: string;
  floatLabelControl = new FormControl('auto');
  get username() {
    return this.form.get('username');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get gender() {
    return this.form.get('gender')
  }

  get age() {
    return this.form.get('age');
  }

  get phone() {
    return this.form.get('phone')
  }


  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private fb: FormBuilder) {
    iconRegistry.addSvgIconLiteral('thumbs-up', sanitizer.bypassSecurityTrustHtml(THUMBUP_ICON));
  }

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform(), {
      validators: matchPassword,
      floatLabel: this.floatLabelControl,
    });
  }

  buildform() {
    return {
      username: ['User name', [userLength(5, 12), Validators.required]],
      password: ['1234', [characterCheck(5)]],
      confirmPassword: ['', Validators.required],
      email: [{ value: 'email@gmail.com', disabled: true }],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required]
    };
  }

  onSubmit() {
    console.log(this.form.value);
    console.log(this.username?.value);
    console.log(this.password?.value);
    console.log(this.age?.value);
    console.log(this.phone?.value);
  }

  getErrorMessage(): string {
    if (this.password?.errors?.['needUpper']) return "Password need at least 1 upper";
    if (this.password?.errors?.['needNumber']) return "Password need at least 1 number";
    if (this.password?.errors?.['needSpecial']) return "Password need at least 1 special";
    if (this.password?.errors?.['needLower']) return "Password need at least 1 lower";
    if (this.password?.errors?.['minlen']) return "Passwords need to be longer than " + this.password?.errors?.['minlength'];
    return "";
  }

}


interface ValidatorFn {
  (control: AbstractControl): ValidationErrors | null;
}


function userLength(minlen: number, maxlen: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (control.value.length < minlen || control.value.length >= maxlen) {
      return { minlen: true, minlength: minlen };
    }
    return null;
  };
}

function matchPassword(group: FormGroup): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirmPassword')?.value;

  return password !== confirm ? { notMatch: true } : null;
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

