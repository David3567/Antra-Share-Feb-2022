import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() color!:string;
  @Output() colorEmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(){
    this.colorEmiter.emit(this.color);
  }
}
