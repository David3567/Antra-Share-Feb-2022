import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  displayName: string = 'Apawcalypse♡';
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

  constructor(private LS: LoginService, private route: ActivatedRoute) { }

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
    this.checkedUser = this.route.snapshot.params["username"];
    if (this.checkedUser) {
      this.displayName = this.checkedUser;
    }
  }

  onSubmit() {
    console.log(this.profile.value);
    this.displayName = this.profile.value.name;
  }
}
