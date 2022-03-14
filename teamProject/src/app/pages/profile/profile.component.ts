import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {

  isCollapsed = false;
  visible = false;

  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.visible = true;
  }

  close(){
    this.visible = false;
  }
}
