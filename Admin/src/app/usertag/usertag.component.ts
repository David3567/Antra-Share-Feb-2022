import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces';

@Component({
  selector: 'app-usertag',
  templateUrl: './usertag.component.html',
  styleUrls: ['./usertag.component.css']
})
export class UsertagComponent implements OnInit {
  @Input() userdetails!:User;
  @Output() info = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  showdetails(){
    this.info.emit(this.userdetails);
  }

}
