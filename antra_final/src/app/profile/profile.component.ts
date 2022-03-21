import { Component, OnInit,ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfoPanelComponent } from '../admin/user-info-panel/user-info-panel.component';
import { UserService } from '../core/user.service';
import { User } from '../interface/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  editstatus:boolean =  false;
  profileForm!:FormGroup;
  constructor(private fb:FormBuilder
  ) { }
  //user$:any;


  ngOnInit(): void {
    this.profileForm = this.fb.group(this.buildform())
    //this.user$ = this.userservice.getAllUsers();
    //this.username?.valueChanges.subscribe();
  }

  buildform(){
    return {
      username:['someusername',
      [Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      pswd: ['1234', [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[$@$!%*?&~]).{5,}")]],
      email:['1234@gmail.com'],
      gender: ['female',Validators.required],
      age: ['18',[Validators.required]],

    }
  }
  editprofile(){
    this.editstatus = true;
  }
  backprofile(){
    this.editstatus = false;
  }
  onSubmit(){
    console.log(this.profileForm.value);
  }
  get username(){
    return this.profileForm.get("username");
  }
  get pswd(){
    return this.profileForm.get("pswd");
  }

  get gender(){
    return this.profileForm.get("gender");
  }

}
