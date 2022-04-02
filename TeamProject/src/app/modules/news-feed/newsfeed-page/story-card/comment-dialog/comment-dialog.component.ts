import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
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
  pageIndex: number = 1;
  pageSize: number;
  head: number = 0;
  tail: number = 3;
  previousBtn: boolean = true;
  nextBtn: boolean = true;

  constructor(
    private router: Router,
    private newsService: NewsfeedService,
    private loginService: LoginService,
    @Inject(MAT_DIALOG_DATA) public data: { comment: Comment[]; _id: string }
  ) { }

  ngOnInit(): void {
    this.storyID = this.data._id;
    this.commentList = this.data.comment.sort((a: any, b: any) =>
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
      "publisherName": this.loginService.currentUser.userName,
      "content": {
        "text": comment
      }
    }

    this.newsService.addNewComment(this.storyID, this.newComment).subscribe((response) => {
      this.commentList = response["body"]["0"].comment.sort((a: any, b: any) =>
        Date.parse(b.publishedTime) - Date.parse(a.publishedTime));

      this.pageSize = Math.ceil(this.commentList.length / 3);
      this.onNext();
      this.onPrevious();
    });
  }

  checkUser(username): boolean {
    if (username === this.loginService.currentUser["userName"] || this.loginService.currentUser["userRole"] === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  toUserProfile(user: string) {
    console.log(user);
    this.router.navigate([`profile/${user}`]);
  }
}
