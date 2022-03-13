import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../interface/interface.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() userinfo!: Users;
  
  constructor() { }

  ngOnInit(): void {
  }

}
