import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  Userlist!:User[];
  info!:User;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data: User[])=>{
      this.Userlist = data;
    })
  }
  show(details:User){
    console.log(details);
    this.info = details;
  }

}

