import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { JWTDecoderService } from 'src/app/services/jwt-decoder.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  displayName: string = 'Apawcalypse♡';
  userName: string = 'SiameseCat101';
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
    email: new FormControl({ value: '', disabled: true }),
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

  constructor(private profileService: UsersService,
    private route: ActivatedRoute,
    private jwtService: JWTDecoderService) { }

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
    if (!this.route.snapshot.params["username"]) {
      this.displayName = this.jwtService.getCurrentUser().name;
      console.log(this.jwtService.getCurrentUser());
      this.userName = this.jwtService.getCurrentUser().userName ? this.jwtService.getCurrentUser().userName : null;
      this.profile.get('email').setValue(this.jwtService.getCurrentUser().userEmail);
      return
    }

    this.userName = this.route.snapshot.params["username"];
    this.getUserInfo();
  }

  getUserInfo() {
    this.profileService.getProfile(this.userName).subscribe((response) => {
      console.log(response);
      this.user = response;
      this.displayName = this.user.name ? this.user.name : (this.user ? this.userName : null);
      this.profile.get('email').setValue(this.user.userEmail);
    });
  }

  onSubmit() {
    console.log(this.profile.value);
    this.displayName = this.profile.value.name;
  }
}
