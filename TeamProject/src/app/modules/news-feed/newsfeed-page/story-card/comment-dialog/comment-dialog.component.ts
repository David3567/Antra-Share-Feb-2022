import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Comment } from 'src/app/interfaces/news.model';

import { JWTDecoderService } from 'src/app/services/jwt-decoder.service';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
})
export class CommentDialogComponent implements OnInit {
  newComment: any;
  storyID: string;
  commentList: Comment[];
  pageList: Comment[];
  pageIndex: number = 0;
  pageSize: number;
  head: number = 0;
  tail: number = 3;
  previousBtn: boolean = true;
  nextBtn: boolean = true;
  pageNumbers: number[] = [];

  constructor(
    private router: Router,
    private newsService: NewsfeedService,
    private jwtService: JWTDecoderService,
    @Inject(MAT_DIALOG_DATA) public data: { comment: Comment[]; _id: string }
  ) { }

  ngOnInit(): void {
    this.storyID = this.data._id;
    this.commentList = this.data.comment.sort((a: any, b: any) =>
      Date.parse(b.publishedTime) - Date.parse(a.publishedTime));

    this.pageList = this.commentList.slice(this.head, this.tail);
    this.pageSize = this.commentList.length === 0 ? 1 : Math.ceil(this.commentList.length / 3);

    console.log(this.head, this.tail, this.pageSize * 3);
    this.nextBtn = this.pageSize > 1 ? false : this.nextBtn;

    this.updatePages();
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

  updateComments(page: number) {
    this.head = page*3;
    this.tail = (page*3 + 3);
    this.pageIndex = page;
    this.pageList = this.commentList.slice( 0 + page*3 , 3 + page*3 );
    this.previousBtn = this.pageNumbers[0] === this.pageIndex ? true : false;
    this.nextBtn = this.pageNumbers[this.pageNumbers.length-1] === this.pageIndex ? true : false;
  }

  postNewComment(comment: string) {
    this.newComment = {
      "publisherName": this.jwtService.getCurrentUser().userName,
      "content": {
        "text": comment
      }
    }

    this.newsService.addNewComment(this.storyID, this.newComment).subscribe((response) => {
      this.commentList = response["body"]["0"].comment.sort((a: any, b: any) =>
        Date.parse(b.publishedTime) - Date.parse(a.publishedTime));

      this.pageSize = Math.ceil(this.commentList.length / 3);

      // Refresh dialog
      this.onNext();
      this.onPrevious();
    });
  }

  checkUser(commentOwner): boolean {
    if (this.jwtService.getCurrentUser().userRole === "admin"
      || commentOwner === this.jwtService.getCurrentUser().userName) {
      return true
    } else {
      return false;
    }
  }

  onProfile(username: string) {
    if (this.checkUser(username)) {
      this.router.navigate([`profile/${username}`]);
    }
  }

  deleteComment(commentId: string) {
    this.newsService.deleteComment(this.storyID, commentId).subscribe(console.log);
    const index = this.commentList.findIndex(object => object._id === commentId);
    this.commentList.splice(index, 1);

    this.pageSize = Math.ceil(this.commentList.length / 3);
    this.updatePages();

    // Refresh dialog
    this.onNext();
    this.onPrevious();
  }

  updatePages() {
    this.pageNumbers = [];
    for (let i = 0 ; i< this.pageSize; i++) {
    
      this.pageNumbers.push(i);
    }
  }
}
