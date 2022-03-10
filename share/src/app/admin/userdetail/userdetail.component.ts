import { Component, Input, OnInit } from '@angular/core';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.scss']
})
export class UserdetailComponent implements OnInit {
  @Input() displayuser!: User

  constructor() { }

  ngOnInit(){
  }

}
