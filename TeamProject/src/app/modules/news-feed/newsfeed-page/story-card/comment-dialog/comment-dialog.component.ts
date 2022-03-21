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

    console.log(this.head, this.tail, this.pageSize * 5);
    this.nextBtn = this.pageSize > 1 ? false : this.nextBtn;
  }

  onPrevious() {
    this.head -= 5;
    this.tail -= 5;
    this.pageIndex--;
    this.pageList = this.commentList.slice(this.head, this.tail);

    console.log(this.head, this.tail, this.pageSize * 5);
    this.previousBtn = this.head === 0 ? true : this.previousBtn;
    this.nextBtn = false;
  }

  onNext() {
    this.head += 5;
    this.tail += 5;
    this.pageIndex++;
    this.pageList = this.commentList.slice(this.head, this.tail);

    console.log(this.head, this.tail, this.pageSize * 5);
    this.nextBtn = this.tail === this.pageSize * 5 ? true : this.nextBtn;
    this.previousBtn = false;
  }
}
