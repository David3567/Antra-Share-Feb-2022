import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = this.fb.group(
    {
      username: ['', [Validators.minLength(5),Validators.maxLength(12),Validators.required]],
      password: ['',[Validators.minLength(5),Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-]).{5,}$"), Validators.required]]
    },
    {
      Validators: this.matchPassword,
    }
  );

  get username(){
    return this.loginForm.get('username');
  }

  get password(){
    return this.loginForm.get('password');
  }


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void { }

  onSubmit(){
    console.log(this.loginForm.value);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const username = group.get('username')?.value;

    return password !== username ? { notMatch: true }: null;
  }

}
