import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  displayName: string = 'Apawcalypse♡';

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
        '^(?=.*[A-Z])(?=.*[#?!@$%^&*])[A-Za-z0-9#?!@$%^&*]{5,}$'
      ),
    ]),
  });

  constructor() {}

  get nameFC() {
    return this.profile.get('name');
  }
  get passwordFC() {
    return this.profile.get('password');
  }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.profile.value);
    this.displayName = this.profile.value.name;
  }
}
