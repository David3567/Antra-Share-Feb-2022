import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { User } from 'src/app/core/interface/user.model';

@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.scss']
})
export class UserInfoPanelComponent implements OnInit{
  userlist: User[] =[];
  @Output() userWasSelected = new EventEmitter<User>();

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.userservice.getAllUsers().subscribe((userlist) => {
      this.userlist = userlist as User[];
    }) 
  }

  deleteuser(id: string) {
    console.log(id);
    this.userlist = this.userlist.filter((ele: any) => +ele.id !== +id);
    this.userservice.deleteUser(id);
  }

  selectuser(user: User) {
    this.userWasSelected.emit(user);

  }


}
