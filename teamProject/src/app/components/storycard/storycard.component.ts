import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';


@Component({
  selector: 'app-storycard',
  templateUrl: './storycard.component.html',
  styleUrls: ['./storycard.component.less']
})
export class StorycardComponent implements OnInit {
  @Input() news!: News;
  @Output() addLikeEmitter = new EventEmitter();
  @Output() removeLikeEmitter = new EventEmitter();
  like: boolean = true;

  constructor(private newsfeedservice:NewsfeedService) { }

  ngOnInit(): void {
  }

  addLike() {
    this.addLikeEmitter.emit(this.news);
  }

  removeLike() {
    this.removeLikeEmitter.emit(this.news);
  }

  addToLike() {
    if (this.like) {
      this.like = false;
      //this.newsfeedservice.addToLikeList(this.news);
      this.addLike();
    }
    else {
      this.like = true;
      //this.newsfeedservice.deleteFromLikeList(this.news);
      this.removeLike();
    }
  }
}
