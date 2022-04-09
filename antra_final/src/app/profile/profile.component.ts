import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserInfoPanelComponent } from '../admin/user-info-panel/user-info-panel.component';
import { ProfileService } from '../core/profile.service';
import { ShortenPipe } from '../core/shorten.pipe';
import { NewUser } from '../interface/newuser.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [ ShortenPipe]
})
export class ProfileComponent implements OnInit, OnDestroy {
  editstatus:boolean =  false;
  profileForm!:FormGroup;
  userList: NewUser[] = [];
  subscriptionNews$ = new Subscription();
  // @Input() useritem!: NewUser;

  get username(){
    return this.profileForm.get("username");
  }
  get pswd(){
    return this.profileForm.get("pswd");
  }

  get gender(){
    return this.profileForm.get("gender");
  }

  subsciptionProfiles$ = new Subscription();
  
  constructor(private fb:FormBuilder,
    private profileService: ProfileService) { }

  ngOnInit(): void {
    
    this.subsciptionProfiles$ = this.profileService.
    getCurrentUser().subscribe((data) => {
      this.userList = data;
    })
    console.log(this.userList);
    this.profileForm = this.fb.group(this.buildform());
  }

  ngOnDestroy(): void {
    this.subsciptionProfiles$.unsubscribe();
  }

  buildform(){
    return {
      username:[this.userList[0].userName,
      [Validators.required, Validators.minLength(5),Validators.maxLength(12)]],
      pswd: [, [Validators.required,Validators.pattern("^(?=.*[A-Z])(?=.*[$@$!%*?&~]).{5,}")]],
      email:[],
      gender: ['female',Validators.required],
      age: [,[Validators.required]],

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


}