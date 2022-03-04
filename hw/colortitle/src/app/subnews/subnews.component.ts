import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { News } from '../news.model';

@Component({
  selector: 'app-subnews',
  templateUrl: './subnews.component.html',
  styleUrls: ['./subnews.component.css']
})
export class SubnewsComponent implements OnInit {
  // alternatively newsitem can get from service.ts
  @Input() newsitem!: News;

  @Output() myChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  childChange() {
    this.myChange.emit(this.newsitem.color);
  }

}
