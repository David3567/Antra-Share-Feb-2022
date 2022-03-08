import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';


@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userdetails!:User;
  @Output() info = new EventEmitter(); delete = new EventEmitter();

  data:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  showdetails(){
    //this.info = this.userdetails
    this.data= this.userdetails.id;
    this.info.emit(this.data);
  }

  deletbtn(){
    this.data= this.userdetails.id;
    this.delete.emit(this.data);
  }

}
