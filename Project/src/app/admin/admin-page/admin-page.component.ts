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
  newuser!:User;
  constructor(private adminservice:AdminService) { }

  ngOnInit(): void {
    this.adminservice.getUsers().subscribe((data: User[])=>{
      this.Userlist = data;
    })
  }
  getselectedId(id:number){
    this.infoid = id;
    this.infodetails = this.Userlist[this.infoid-1];
  }
  
  deleteUser(id:any){
    console.log("delete")
    this.Userlist = this.Userlist.filter((user) => user.id !== id);
  }
  // adduser(){
  //   // if (e.key === 'Enter')
  //     // console.log(e.target.value);

  //   this.adminservice.addUsers(this.newuser).subscribe((user: User) => {
  //     this.Userlist = [user, ...this.Userlist];
  //   });
  // }
}

