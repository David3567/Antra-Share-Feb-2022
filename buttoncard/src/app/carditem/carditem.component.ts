import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../interfaces/card.model';

@Component({
  selector: 'app-carditem',
  templateUrl: './carditem.component.html',
  styleUrls: ['./carditem.component.scss'],
})
export class CarditemComponent implements OnInit {
  @Input() carditem!: Card;
  @Output() cardEmiter = new EventEmitter();
  Style: String[] = ['blue', 'black', 'red', 'green'];

  constructor() {}

  ngOnInit(): void {}

  clickChangeTitleColor(event: Event) {
    const test = document.querySelector('.title') as HTMLElement;
    test.style.color = window
      .getComputedStyle(event.target as HTMLButtonElement, null)
      .getPropertyValue('background-color');
  }

  focusChangeLiColor(event: Event) {
    const test = (event.target as HTMLButtonElement).parentElement;
    let border_style =
      '2px solid ' +
      window
        .getComputedStyle(event.target as HTMLButtonElement, null)
        .getPropertyValue('background-color');
    test!.style.border = border_style;
    let box_shadow_style =
      '5px 5px 5px ' +
      window
        .getComputedStyle(event.target as HTMLButtonElement, null)
        .getPropertyValue('background-color');
    test!.style.boxShadow = box_shadow_style;
  }

  focusoutChangeLiColor(event: Event) {
    const test = (event.target as HTMLButtonElement).parentElement;
    test!.style.border = 'none';
    test!.style.boxShadow = 'none';
  }
}
