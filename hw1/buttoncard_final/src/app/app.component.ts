import { Component } from '@angular/core';
import { Card } from './interfaces/card.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  TitleColor!:string;
  FocusId!: number;

  cardlist: Card[] = [
    {
      id: 1,
      title: 'Card No.1',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Card No.2',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'black',
    },
    {
      id: 3,
      title: 'Card No.3',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'red',
    },
    {
      id: 4,
      title: 'Card No.4',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'green',
    },
  ];
  
  title = 'buttoncard_final';

  getcolor(arr:[string, number]){
    this.TitleColor = arr[0];
    this.FocusId = arr[1];
  }
}
