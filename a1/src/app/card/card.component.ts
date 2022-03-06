import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardsitems!:any;
  @Output() cardColor = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }
  getcolor(){
    //console.log(this.cardsitems.color);
    this.cardColor.emit(this.cardsitems.color);
  }
}
