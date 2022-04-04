import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  displayName: string = 'Apawcalypse♡';
  userName: string = '@SiameseCat101';
  user: any;
  hide: boolean = true;
  checkedUser: string = "";
  subs: Subscription;

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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getProfile() {
    this.subs = this.profileService.getUserName().pipe(
      tap((username: string) => this.userName = username),
      switchMap((username: string) => this.profileService.getProfile(username))).pipe(
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
