import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthenticationService } from 'src/app/authentication.service';
import { UserInput } from 'src/app/model/model';
import { login, updatePatient } from 'src/app/stateManagement/login.actions';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  validated: boolean = false;
  login: UserInput;
  isLoading!: boolean;

  constructor(private auth: AuthenticationService,
    private router: Router,
    private store: Store) { }

  ngOnInit(): void {
    console.log(this.auth.patients);
  }

  onSubmit(form) {
    this.login = {
      DOB: form.form.value.DOB,
      zipCode: +form.form.value.zipcode
    }
    this.validated = this.auth.checkUser(this.login);
    if(this.validated) {this.isLoading = true;}

    setTimeout(() => {
      if(this.validated) {
        console.log('Continue was successful');
        this.store.dispatch(login(this.login));
        this.store.dispatch(updatePatient(this.auth.getPatient(this.login)));
        this.isLoading = false;
        this.router.navigateByUrl('confirm');
      }
    }, 1000)
    
  }

}
