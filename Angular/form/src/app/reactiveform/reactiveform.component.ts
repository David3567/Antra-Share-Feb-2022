import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  form!: FormGroup;

  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group(this.buildform());

    this.username?.valueChanges.subscribe((val) => {
      this.password?.setValue(val);
    });
  }

  buildform() {
    return {
      username: ['David', Validators.required],
      password: ['1234'],
    };
  }

  onSubmit() {
    console.log(this.username?.value);
  }
}
