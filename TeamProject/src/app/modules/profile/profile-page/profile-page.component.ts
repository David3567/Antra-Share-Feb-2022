import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { flatMap, tap } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  displayName: string = 'Apawcalypse♡';
  userName: string = '@SiameseCat101';
  user: any;
  hide: boolean = true;
  checkedUser: string = "";

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

  constructor(private profileService: UsersService) { }

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
    this.getProfile();
  }

  getProfile() {
    this.profileService.getUserName().pipe(
      tap((username: string) => this.userName = username),
      flatMap((username: string) => this.profileService.getProfile(username))).pipe(
        tap(console.log)).
      subscribe(info => {
        this.user = info
        this.displayName = info.name
      })
  }

  onSubmit() {
    console.log(this.profile.value);
    this.displayName = this.profile.value.name;
  }
}
