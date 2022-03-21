import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariableValue } from '../services/variable.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private variable : VariableValue) { }

  ngOnInit(): void {
  }
  onLoginBtn(){
    this.variable.login = true;
    console.log(this.variable.login);
    this.router.navigate(['home']);
    
  }
  onRegisterBtn(){
    this.router.navigate(['register']);
  }
}
