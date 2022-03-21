import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  clickedStoryId!: string;

  constructor(private newsfeedservice: NewsfeedService) { }


  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe((data) => { this.newsList = data })
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

  showModal(): void {
    this.clickedStoryId = this.news._id;
    this.isVisible = true;
    for(let i = 0; i < this.news.comment.length; i++) {
    }
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}


