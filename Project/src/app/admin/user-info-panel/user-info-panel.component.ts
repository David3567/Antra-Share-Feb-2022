import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';


@Component({
  selector: 'app-user-info-panel',
  templateUrl: './user-info-panel.component.html',
  styleUrls: ['./user-info-panel.component.css']
})
export class UserInfoPanelComponent implements OnInit {
  @Input() userdetails!:User;
  @Output() info = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  showdetails(){
    this.info.emit(this.userdetails);
  }

}
