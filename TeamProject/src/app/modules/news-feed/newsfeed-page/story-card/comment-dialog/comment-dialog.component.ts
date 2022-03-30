import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import jwt_decode from "jwt-decode";

var token = localStorage.getItem('bearerToken');
var decoded: any = jwt_decode(token);

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
})
export class CommentDialogComponent implements OnInit {
  @Output() udpatedStoryEmitter = new EventEmitter<newsTemplate>();
  newComment: any;
  storyID: string;
  commentList: Comment[];
  pageList: Comment[];
  pageIndex: number = 1;
  pageSize: number;
  head: number = 0;
  tail: number = 3;
  previousBtn: boolean = true;
  nextBtn: boolean = true;

  constructor(private newsService: NewsfeedService, @Inject(MAT_DIALOG_DATA) public data: { comment: Comment[], _id: string }) { }

  ngOnInit(): void {
    this.storyID = this.data._id;
    this.commentList = this.data.comment.sort((a : any, b : any) => 
    Date.parse(b.publishedTime) - Date.parse(a.publishedTime));
    this.pageList = this.commentList.slice(this.head, this.tail);
    this.pageSize = Math.ceil(this.commentList.length / 3);

    console.log(this.head, this.tail, this.pageSize * 3);
    this.nextBtn = this.pageSize > 1 ? false : this.nextBtn;
  }

  onPrevious() {
    this.head -= 3;
    this.tail -= 3;
    this.pageIndex--;
    this.pageList = this.commentList.slice(this.head, this.tail);

    console.log(this.head, this.tail, this.pageSize * 3);
    this.previousBtn = this.head === 0 ? true : this.previousBtn;
    this.nextBtn = false;
  }

  onNext() {
    this.head += 3;
    this.tail += 3;
    this.pageIndex++;
    this.pageList = this.commentList.slice(this.head, this.tail);

    console.log(this.head, this.tail, this.pageSize * 3);
    this.nextBtn = this.tail === this.pageSize * 3 ? true : this.nextBtn;
    this.previousBtn = false;
  }

  postNewComment(comment: string) {
    this.newComment = {
      "publisherName": decoded.userName,
      "content": {
        "text": comment
      }
    }
    
    console.log(`The id is: ${this.storyID} and the comment is ${comment}`);
    this.newsService.addNewComment(this.storyID, this.newComment).subscribe((response)=> {
      this.commentList = response.body["0"].comment.sort((a : any, b : any) => 
      Date.parse(b.publishedTime) - Date.parse(a.publishedTime));
      // this.udpatedStoryEmitter.emit(response.body);
    });
  }


}
