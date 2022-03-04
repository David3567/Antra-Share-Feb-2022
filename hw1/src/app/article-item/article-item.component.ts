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
  status: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.status = !this.status;
    console.log(this.status);
    console.log(this.item.id);
  }
}
