import { getCurrencySymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../interfaces/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() item! : Article;
  status: boolean = true;
  
  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    return this.item.color;
    //this.status = !this.status;
  }

}
