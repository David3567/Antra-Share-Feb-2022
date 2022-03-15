import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormGroup,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-crossfieldvalidation',
  templateUrl: './crossfieldvalidation.component.html',
  styleUrls: ['./crossfieldvalidation.component.scss'],
})
export class CrossfieldvalidationComponent implements OnInit {
  myForm: FormGroup = this.fb.group(
    {
      password: ['', [Validators.required]],
      confirm: ['', [Validators.required]],
    },
    {
      validators: this.matchPassword,
    }
  );

  get password() {
    return this.myForm.get('password');
  }
  get confirm() {
    return this.myForm.get('confirm');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.myForm.value);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirm')?.value;

    return password !== confirm ? { notMatch: true } : null;
  }
}
