import { getCurrencySymbol } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Article } from '../interfaces/article.model';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.scss']
})
export class ArticleItemComponent implements OnInit {
  @Input() item! : Article;
  @Output() emitColor = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  setColor() {
    this.emitColor.emit(this.item.color);
  }
}
