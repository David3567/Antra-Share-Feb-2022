import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
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
  isVisible = false;
  newsList!: any;
  subscribeNewsService = new Subscription();


  constructor(private newsfeedservice: NewsfeedService) { }


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
      this.addLike();
    }
    else {
      this.like = true;
      this.removeLike();
    }
  }

  showModal(): void {
    this.isVisible = true;
    for(let i = 0; i < this.news.comment.length; i++) {
    }
  }

  handleCancel(): void {
    this.isVisible = false;
  }

}