import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.model';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.scss'],
})
export class CardlistComponent implements OnInit {
  TitleColor!: string;
  cardlist: Card[] = [
    {
      id: 1,
      title: 'Li No.1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
    },
    {
      id: 2,
      title: 'Li No.2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
    },
    {
      id: 3,
      title: 'Li No.3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
    },
    {
      id: 4,
      title: 'Li No.4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  changeTitleColor(TitleColor: string) {
    this.TitleColor = TitleColor;
  }
}
