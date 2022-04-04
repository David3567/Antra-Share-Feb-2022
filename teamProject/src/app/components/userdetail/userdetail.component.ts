import { Component, DoCheck, Input } from '@angular/core';
import { NewUser } from "src/app/interfaces/backEndUser.model";
import { AuthenService } from "src/app/services/authen.service";


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.less']
})
export class UserdetailComponent implements DoCheck {

  @Input() user!: string;

  userData!: NewUser;

  constructor(private authenService: AuthenService) {}

  ngDoCheck(): void {
    this.authenService.getSpecificUser(this.user).subscribe(
      (data) => {
        this.userData = data;
      }
    )
  }
}
