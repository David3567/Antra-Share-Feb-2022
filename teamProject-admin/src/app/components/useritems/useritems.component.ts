import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-useritems',
  templateUrl: './useritems.component.html',
  styleUrls: ['./useritems.component.less']
})
export class UseritemsComponent implements OnInit {
  @Input() user!:User;
  @Output() userIdEmiter = new EventEmitter();
  @Output() userEmiter = new EventEmitter();

  selectedFlag:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  selected(){
    this.selectedFlag = true;
  }

  unSelect(){
    this.selectedFlag = false;
  }

  selectUser(){
    this.selected();
    this.userEmiter.emit(this.user);
  }

  deleteUser(){
    this.userIdEmiter.emit(this.user.id);
  }

}
