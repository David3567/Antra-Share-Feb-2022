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
  infoid!:any;
  infodetails!:User;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data: User[])=>{
      this.Userlist = data;
    })
  }
  getinfoid(id:number){
    this.infoid = id;
    this.infodetails = this.Userlist[this.infoid];
    console.log(this.infodetails);
  }
  
  deleteuser(id:number){
    console.log("delete")
    this.Userlist = this.Userlist.filter((user) => user.id !== id);
  }

}

