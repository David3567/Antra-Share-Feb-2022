import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hw1';
  titleColor = 'black';

  contextsInfo = [
    {
      title:
        "Wisconsin Democratic election official: Don't water Trump's 'plant of baloney'",
      // tslint:disable-next-line: max-line-length
      info: 'MADISON, Wis. — The Wisconsin Elections Commission late Wednesday, after an hours long often-contentious debate, agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a pro forma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. “It’s just remarkable the six of us in a civilized fashion can’t agree to this stuff,” Democratic commissioner Mark Thomsen said hours into the debate.',
      color: 'blue',
    },
    {
      title:
        'Current and former Trump officials quietly reach out to Biden team',
      // tslint:disable-next-line: max-line-length
      info: 'MADISON, Wis. — The Wisconsin Elections Commission late Wednesday, after an hours long often-contentious debate, agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a pro forma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. “It’s just remarkable the six of us in a civilized fashion can’t agree to this stuff,” Democratic commissioner Mark Thomsen said hours into the debate.',
      color: 'black',
    },
    {
      title: 'Republicans need to decide whether they believe in democracy',
      // tslint:disable-next-line: max-line-length
      info: 'MADISON, Wis. — The Wisconsin Elections Commission late Wednesday, after an hours long often-contentious debate, agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a pro forma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. “It’s just remarkable the six of us in a civilized fashion can’t agree to this stuff,” Democratic commissioner Mark Thomsen said hours into the debate.',
      color: 'red',
    },
    {
      title: 'Republicans need to decide whether they believe in democracy',
      // tslint:disable-next-line: max-line-length
      info: 'MADISON, Wis. — The Wisconsin Elections Commission late Wednesday, after an hours long often-contentious debate, agreed to issue an order on Thursday to recount ballots cast in Milwaukee and Dane counties as requested by President Donald Trump. Trump paid the $3 million required for the recount and issuing the order was expected to be a pro forma move, but it instead resulted in nearly six hours of arguing. The partisan fighting before the recount has even started likely foreshadows the battle that lies ahead. “It’s just remarkable the six of us in a civilized fashion can’t agree to this stuff,” Democratic commissioner Mark Thomsen said hours into the debate.',
      color: 'green',
    },
  ];

  getcolor(color : string) {
    this.titleColor = color;
  }


  
}
