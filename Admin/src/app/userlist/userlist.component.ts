import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  Userlist!:User[];
  info!:User;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data: User[])=>{
      this.Userlist = data;
    })
  }
  

}
