import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  validateForm!:FormGroup;


  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.validateForm = this.formbuilder.group({
      userName:[null,[Validators.required]],
      password:[null,[Validators.required]],
      remember:[null],
    })
  }

  submitForm(): void{

  }

}
