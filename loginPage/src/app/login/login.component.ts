import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: User = { birthdate: '', zipcode: '' };

  setUser() {
    return this.user;
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('input', this.user);
    const users = this.userService.getUsers();
    console.log('database', users);

    for (let i = 0; i < users.length; i++) {
      if (this.user.birthdate === users[i].birthdate && this.user.zipcode === users[i].zipcode) {
        return alert('Login successful.');
      }
    }

    return alert('Login failed.');
  }

}
