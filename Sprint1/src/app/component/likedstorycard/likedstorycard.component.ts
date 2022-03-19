import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';

@Component({
  selector: 'app-likedstorycard',
  templateUrl: './likedstorycard.component.html',
  styleUrls: ['./likedstorycard.component.scss']
})
export class LikedstorycardComponent implements OnInit {

  @Input() news!:News;
  @Output() newsIDEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteLike(){
    this.newsIDEmitter.emit(this.news);
  }

}