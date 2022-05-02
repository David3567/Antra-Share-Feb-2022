import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'entryForm';
  validated: boolean = false;
  login: {DOB: string, zipcode: number};

  constructor(private auth: AuthenticationService){}

  onSubmit(form) {
    this.login = {
      DOB: form.form.value.DOB,
      zipcode: +form.form.value.zipcode
    }
    this.validated = this.auth.checkUser(this.login);

    console.log(this.login, this.validated); 
  }
}
