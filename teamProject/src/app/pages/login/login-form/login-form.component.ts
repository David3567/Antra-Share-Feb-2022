import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from 'src/app/services/authen.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup = this.fb.group(
    {
      email: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.minLength(5),Validators.pattern("(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}"), Validators.required]]
    },
    {
      Validators: this.matchPassword,
    }
  );

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }


  constructor(private fb:FormBuilder, private router: Router, private authenService: AuthenService) { }

  ngOnInit(): void { }

  onSubmit(){
    console.log(this.loginForm.value);
  }

  matchPassword(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const email = group.get('email')?.value;

    return password !== email ? { notMatch: true }: null;
  }

  btnclick(){
    this.router.navigate(['default']);
  }

}
