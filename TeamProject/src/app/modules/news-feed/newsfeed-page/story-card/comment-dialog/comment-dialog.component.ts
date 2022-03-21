import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
})
export class CommentDialogComponent implements OnInit {
  commentList: string[];
  pageList: string[];
  pageIndex: number = 1;
  pageSize: number;
  head: number = 0;
  tail: number = 5;
  previousBtn: boolean = true;
  nextBtn: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { comment: string[] }) {}

  ngOnInit(): void {
    this.commentList = this.data.comment;
    this.pageList = this.commentList.slice(this.head, this.tail);
    this.pageSize = Math.ceil(this.commentList.length / 5);

    this.pageSize > 1 ? (this.nextBtn = false) : null;
  }

  onPrevious() {
    this.head -= 5;
    this.tail -= 5;
    this.pageIndex--;
    this.pageList = this.commentList.slice(this.head, this.tail);

    if (this.head === 0) {
      this.previousBtn = true;
      this.nextBtn = false;
    } else {
      this.nextBtn = false;
    }
  }

  onNext() {
    this.head += 5;
    this.tail += 5;
    this.pageIndex++;
    this.pageList = this.commentList.slice(this.head, this.tail);

    if (this.tail === this.pageSize * 5) {
      this.nextBtn = true;
      this.previousBtn = false;
    } else {
      this.previousBtn = false;
    }
  }
}
