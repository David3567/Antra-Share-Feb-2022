import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthenService } from '../../services/authen.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminComponent implements OnInit {

  userlist!: string[];
  selectedUser!: string;
  selected = false;

  constructor(public authenService: AuthenService) {}

  ngOnInit(): void {
    this.authenService.getAllUserNames()
      .subscribe((data: string[]) => {
        this.userlist = data;
      })
  }

  selectUser(user: string) {
    if(this.selected == true) {
      this.selected = false;
    }
    this.selected = true;
    this.selectedUser = user;
    //console.log(this.selectedUser);
  }
}
