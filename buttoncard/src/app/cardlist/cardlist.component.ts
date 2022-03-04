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
      title: 'Li No.1',
      body: 'Hello World+',
    },
    {
      id: 2,
      title: 'Li No.2',
      body: 'Hello World-',
    },
    {
      id: 3,
      title: 'Li No.3',
      body: 'Hello World*',
    },
    {
      id: 4,
      title: 'Li No.4',
      body: 'Hello World/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
