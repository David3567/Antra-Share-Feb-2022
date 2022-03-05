import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() art! : Article; //1a 
  @Output() btnClick = new EventEmitter(); //1b

  constructor() { }

  ngOnInit(): void {
  }
  onClickBtn(){
    this.btnClick.emit(this.art.color)
  }
}
