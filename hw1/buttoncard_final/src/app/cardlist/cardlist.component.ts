import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card.model';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  @Input() carditem!: Card;
  @Output() getCardColor = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  changeColor(){
    this.getCardColor.emit([this.carditem.color, this.carditem.id]);
  }
}
