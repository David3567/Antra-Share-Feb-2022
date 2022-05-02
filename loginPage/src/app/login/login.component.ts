import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { UserLogin } from '../interfaces/userlogin';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('input', this.user);
    const temp = this.userService.getUser();
    console.log('database', temp);

    for (let i = 0; i < temp.length; i++) {
      if (this.user.birthdate === temp[i].birthdate && this.user.zipcode === temp[i].zipcode) {
        console.log(true);
        return;
      }
    }
    console.log(false);

    // console.log(temp.indexOf({ birthdate: '1', zipcode: '1' }));
    // if (temp.includes(this.user)) {
    //   console.log('yes');
    // } else {
    //   console.log('no');
    // }
  }

}
