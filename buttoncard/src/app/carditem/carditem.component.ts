import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.model';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.scss']
})
export class CarditemComponent implements OnInit {
  @Input() carditem!: Card;
  @Output() cardEmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    console.log("Got it");
  }
}
