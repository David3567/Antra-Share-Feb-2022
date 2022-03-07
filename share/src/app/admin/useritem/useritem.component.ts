import { Component, Input, OnInit, } from '@angular/core';
import { User } from '../interfaces/user.model';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.scss']
})
export class UseritemComponent implements OnInit {
  @Input() useritem!: User;

  constructor() { }

  ngOnInit(): void {
  }

}
