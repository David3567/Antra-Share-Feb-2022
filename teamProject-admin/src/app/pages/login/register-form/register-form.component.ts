import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})
export class RegisterFormComponent implements OnInit {

  validateForm!:FormGroup;

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.validateForm = this.formbuilder.group({
      name:[null,[Validators.required]],
      password:[null,[Validators.required]],
      remember:[null],
    })
  }

  submitForm(): void {

  }
}
