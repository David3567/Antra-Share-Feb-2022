import { Component, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.model';
@Component({
  selector: 'app-changetitle',
  templateUrl: './changetitle.component.html',
  styleUrls: ['./changetitle.component.scss']
})
export class ChangetitleComponent implements OnInit {
  TitleColor!: string;
  FocusId!: number;

  cardlist: Card[] = [
    {
      id: 1,
      title: "Wisconsin Democratic election official: Don't water Trump's 'plant of baloney'",
      body: 'MADISON, Wis. — The Wisconsin Elections Commission late Wednesday, after an hours long often-contentious debate, agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a pro forma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. “It’s just remarkable the six of us in a civilized fashion can’t agree to this stuff,” Democratic commissioner Mark Thomsen said hours into the debate.',
      color: 'blue',
    },
    {
      id: 2,
      title: 'Current and former Trump officials quietly reach out to Biden team',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'black',
    },
    {
      id: 3,
      title: 'Republicans need to decide whether they believe in democracy',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'red',
    },
    {
      id: 4,
      title: 'Republicans need to decide whether they believe in democracy',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem tellus, commodo eget massa vel, ultrices luctus ipsum. Aliquam erat volutpat. Fusce fringilla dictum mollis. Pellentesque a mi eget nulla mattis pretium elementum in nunc. Vivamus luctus finibus varius. Integer euismod lacinia enim, id dapibus sapien ultricies elementum. Mauris efficitur vel urna quis faucibus. Proin ante metus, malesuada quis mattis eget, cursus id erat. Nunc quis felis lectus. Cras cursus nisl sed risus vehicula, ac fringilla justo tincidunt. Sed ornare orci diam, id tincidunt nisi posuere et. Aliquam erat volutpat. Integer gravida nisl et consectetur finibus. Integer in consequat dui, a fermentum ligula.',
      color: 'green',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  clickChangeTitleColor(card: Card) {
    this.TitleColor = card.color;
    this.FocusId = card.id;
  }
  
}
