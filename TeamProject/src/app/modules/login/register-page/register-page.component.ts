import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  // regForm: FormGroup = new FormGroup({
  //   username: new FormControl(''),
  //   password: new FormControl(''),
  //   confirm: new FormControl('')
  // });

  constructor() { }

  ngOnInit(): void {
    // this.regForm = this.formgroup.group({
    //   // Username minLength = 5 & maxLength = 12
    //   username: ["",Validators.minLength, Validators.maxLength],
    //   // Password minLength = 5, at least 1 upppercase and 1 special char (use regex)
    //   password: ["",Validators.minLength,Validators.maxLength, Validators.pattern],
    //   // Email should use formating with @
    //   email: ["", Validators.email]
    // });
  }

  onSubmit(signUpForm: FormGroup) {
    console.log(signUpForm.value);
  }

}
