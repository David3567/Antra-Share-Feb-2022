import { Content } from '../interfaces/content.model';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() contents!: Content;
  @Output() colorEmiter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  clickChangeColor() {
    this.colorEmiter.emit(this.contents.color);
  }
}
