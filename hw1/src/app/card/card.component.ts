import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  news!: { id: number; location: string; content: string; color: string; hasBoxShadow: boolean; };
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setColor(index: number) {
    this.buttonClicked.emit(index);
  }

}
