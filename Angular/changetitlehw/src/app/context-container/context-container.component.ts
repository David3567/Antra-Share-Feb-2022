import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-context-container',
  templateUrl: './context-container.component.html',
  styleUrls: ['./context-container.component.scss'],
})
export class ContextContainerComponent implements OnInit {
  @Input() contextinfo: any;
  @Output() getcontextcolor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  emitColor() {
    this.getcontextcolor.emit(this.contextinfo.color);
  }
}
