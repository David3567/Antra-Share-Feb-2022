import { Component, Input, OnInit } from '@angular/core';
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
  //page: [][] = [];
  numberOfPages = 0;
  commentsPerPage = 5;

  constructor(private newsfeedservice: NewsfeedService) {}

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase().subscribe((data) => { this.newsList = data });
  }

  getCommentArray() {
    for (let i = 0; i < this.newsList.length; i++) {
      if(this.newsList[i]._id == this.clickedStoryId) {
        this.commentArray = this.newsList[i].comment;
        console.log(this.commentArray);
      }
    }
  }

  showPaginator(){
    this.getCommentArray();
    this.numberOfPages = Math.ceil(this.commentArray.length / this.commentsPerPage);
    for(let i = 1; i <= this.numberOfPages; i++) {

    }
  }
}
