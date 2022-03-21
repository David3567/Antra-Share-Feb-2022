import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-modalContent',
  templateUrl: './modalContent.component.html',
  styleUrls: ['./modalContent.component.less']
})
export class ModalContentComponent implements OnInit {
  @Input() news!: News;
  @Input() clickedStoryId!: string;
  
  newsList!: any;
  subscribeNewsService = new Subscription();
  commentArray = [];

  constructor(private newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe((data) => { this.newsList = data })
  }

  getCommentArray() {
    for (let i = 0; i < this.newsList.length; i++) {
      if(this.newsList[i]._id == this.clickedStoryId) {
        this.commentArray = this.newsList[i].comment;
        console.log(this.commentArray);
      }
    }
  }
}
