import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() topic: { id: number, location: string, content: string, color: string, hasBoxShadow: boolean };
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  setColor(index: number) {
    this.buttonClicked.emit(index);
  }

}
