import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { NewUser } from 'src/app/interfaces/backEndUser.model';
import { User } from 'src/app/interfaces/user.model';
import { AuthenService } from 'src/app/services/authen.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  userProfile?:NewUser;

  myForm: FormGroup = this.formbuilder.group({
    username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(12)]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('(?=.*[A-Z])(?=.*[!@#$%^&]).{5,}')]],
    confirm: ['', [Validators.required]],
  },
    {
      validators: this.matchPassword,
    });

  get username() {
    return this.myForm.get('username');
  }

  get password() {
    return this.myForm.get('password');
  }

  get confirm() {
    return this.myForm.get('confirm');
  }

  isCollapsed = false;
  isVisible = false;
  isConfirmLoading = false;

  constructor(private authen:AuthenService, private formbuilder: FormBuilder, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
      let username = localStorage.getItem('userName');
      if (username==null)
      {
        username = this.authen.getUserName();
      }
      else 
      {
        this.authen.getSpecificUser(username).subscribe(
          data=>{
            if(typeof(data)=="boolean")
            {
              console.log('error retriving user, user not exist');
              return
            }
            else {
              this.userProfile = data;
              console.log(this.userProfile)
              this.cdr.detectChanges();
            }
          }
          
        )
      }
    
  }

  showModal(): void {
    this.isVisible = true;
  }

  resetForm(): void {
    this.myForm.setValue({
      username: "",
      password: "",
      confirm: "",
    });
    this.myForm.markAsUntouched();
    this.myForm.markAsPristine();
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.resetForm();
      this.cdr.detectChanges();
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.resetForm();
  }

  onSubmit() {
    this.handleOk();
  }

  matchPassword(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value
    const confirm = control.get('confirm')?.value
    if (password !== confirm) {
      return { notMatch: true };
    }
    else return null;
  }
}
