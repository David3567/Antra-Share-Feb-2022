import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NewUser } from 'src/app/interfaces/newUser.model';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from './mustMatch.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less']
})

export class RegisterFormComponent implements OnInit {

  registerForm!: FormGroup;
  showMessage = false;
  user!: NewUser;

  passwordPattern = '(?=.*[A-Z])(?=.*[^a-zA-Z]).{5,}';


  constructor(private formbuilder: FormBuilder, private userService: UserService) {
  }

  ngOnInit() {
    this.registerForm = this.formbuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
      email: ['', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [this.userService.uniqueEmailValidator()]
      }],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(this.passwordPattern)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: MustMatch('password', 'confirmPassword') })
  }

  onSubmit() {
    this.showMessage = true;
    console.table(this.registerForm.value);

    this.user = {
      userName: this.registerForm.value.username,
      userEmail: this.registerForm.value.email,
      password: this.registerForm.value.password,
      userRole: 'user',
      name: this.registerForm.value.username,
      age: 0,
      gender: 'Male',
      phone: 111222333
    };

    this.userService.registerUser(this.user).subscribe((result) => {
      console.log(result);
    })
    
  }


}
