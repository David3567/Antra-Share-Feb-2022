import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card.model';
@Component({
  selector: 'app-changetitle',
  templateUrl: './changetitle.component.html',
  styleUrls: ['./changetitle.component.scss']
})
export class ChangetitleComponent implements OnInit {

  @Input() contextinfo: any;
  @Output() getcontextcolor = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitColor() {
    this.getcontextcolor.emit(this.contextinfo.color)
  }
  
}
