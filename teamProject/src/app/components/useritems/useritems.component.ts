import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { User } from 'src/app/interfaces/user.model';

@Component({
  selector: 'app-useritems',
  templateUrl: './useritems.component.html',
  styleUrls: ['./useritems.component.less']
})
export class UseritemsComponent implements OnInit {
  @Input() user!:User;
  @Input() selected:boolean = false;
  @Output() userIdEmiter = new EventEmitter();
  @Output() userEmiter = new EventEmitter();
  @Output() unselectSingleUserEmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  selectUser(){
    if(this.selected)
    {
      this.selected=false;
      console.log("unselect");
      this.unselectSingleUserEmiter.emit();
    }
    else {
      console.log("select");
      this.userEmiter.emit(this.user);
    }
  }

  deleteUser(){
    this.userIdEmiter.emit(this.user.id);
  }

}
