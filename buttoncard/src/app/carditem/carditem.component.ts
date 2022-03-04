import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.model';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.scss'],
})
export class CarditemComponent implements OnInit {
  @Input() carditem!: Card;
  @Output() TitleColorEmiter = new EventEmitter();

  TitleColor!: string;
  constructor() {}

  ngOnInit(): void {}

  clickChangeTitleColor(event: Event) {
    // const test = document.querySelector('.title') as HTMLElement;
    // test.style.color = window
    //   .getComputedStyle(event.target as HTMLButtonElement, null)
    //   .getPropertyValue('background-color');
    this.TitleColor = window
      .getComputedStyle(event.target as HTMLButtonElement, null)
      .getPropertyValue('background-color');
      // console.log(this.TitleColor);
    this.TitleColorEmiter.emit(this.TitleColor);
  }

  focusChangeLiColor(event: Event) {
    
    const test = (event.target as HTMLButtonElement).parentElement;
    test!.style.border = '2px solid ' + this.TitleColor;
    test!.style.boxShadow = '5px 5px 5px ' + this.TitleColor;

  }

  focusoutChangeLiColor(event: Event) {
    const test = (event.target as HTMLButtonElement).parentElement;
    test!.style.border = 'none';
    test!.style.boxShadow = 'none';
  }
}
