import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.model';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  cardlist: Card[] = [
    {
      id: 1,
      title: 'number 1',
      body: 'Hello World~',
    },
    {
      id: 2,
      title: 'number 2',
      body: 'Hello World.',
    },
    {
      id: 3,
      title: 'number 3',
      body: 'Hello World!',
    },
    {
      id: 4,
      title: 'number 4',
      body: 'Hello World_',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
