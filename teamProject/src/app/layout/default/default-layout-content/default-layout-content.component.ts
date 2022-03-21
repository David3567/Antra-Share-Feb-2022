import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-default-layout-content',
  templateUrl: './default-layout-content.component.html',
  styleUrls: ['./default-layout-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
