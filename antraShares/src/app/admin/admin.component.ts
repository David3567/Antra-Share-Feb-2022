import { Component, OnInit } from '@angular/core';
import { UserinforService } from '../services/userinfor.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private UserinforService: UserinforService) {}

  ngOnInit(): void {
    this.UserinforService.getUsers().subscribe((data:any)=>{
      console.log(data)
    });
  }

}
