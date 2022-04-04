import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usersTemplate } from 'src/app/interfaces/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {

  displayName: string = 'Apawcalypse♡';
  userProfile?: any;

  hide: boolean = true;

  profile = new FormGroup({
    bio: new FormControl(''),
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(12),
    ]),
    email: new FormControl({ value: 'catLover78@gmail.com', disabled: true }),
    age: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern(
        '^(?=.*[A-Z])(?=.*[#?!@$%^&*])[A-Za-z0-9#?!@$%^&*]{0,}$'
      ),
    ]),
    confirm: new FormControl('', Validators.required),
  });

  constructor(private userService: UsersService) {}

  get nameFC() {
    return this.profile.get('name');
  }
  get passwordFC() {
    return this.profile.get('password');
  }
  get confirmFC() {
    return this.profile.get('confirm');
  }

  ngOnInit(): void {
    console.log(window.location.href.substring(window.location.href.lastIndexOf('/') + 1));
    this.displayName = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
    console.log(this.displayName);
    // this.userService.getUserProfile(this.displayName).subscribe((userInfo)=> {this.userProfile = userInfo});
    // console.log(this.userProfile);

    // this.feedService.getNews().subscribe((news)=> this.newsList = news.reverse());
  }

  onSubmit() {
    console.log(this.profile.value);
    this.displayName = this.profile.value.name;
   
  }
}
