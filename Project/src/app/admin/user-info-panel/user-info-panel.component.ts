import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';


@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userdetails!:User;
  @Output() userId = new EventEmitter(); 
  @Output() deleteId = new EventEmitter();
  selectedId:number = 0;
  deletedId:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  showUserId(){
    
    //this.info = this.userdetails
    this.selectedId= this.userdetails.id;
    this.userId.emit(this.selectedId);
  }
  deleteUserId(){
    
    //this.info = this.userdetails
    this.deletedId= this.userdetails.id;
    this.userId.emit(this.deletedId);
  }


}
