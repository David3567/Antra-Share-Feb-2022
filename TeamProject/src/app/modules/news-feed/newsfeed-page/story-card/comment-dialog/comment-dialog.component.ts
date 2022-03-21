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
  currentPage: number = 1;
  pageSize: number;
  head: number = 0;
  tail: number = 6;
  pageCapacity: number = this.tail - this.head;
  prevBtnDisabled: boolean = true;
  nextBtnDisabled: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { comment: string[] }) {}

  ngOnInit(): void {
    this.commentList = this.data.comment;
    this.pageList = this.commentList.slice(this.head, this.tail);
    this.pageSize = Math.ceil(this.commentList.length / this.pageCapacity);
    this.pageSize > 1 ? (this.nextBtnDisabled = false) : true;
  }

  onPrev() {
    this.head -= this.pageCapacity;
    this.tail -= this.pageCapacity;
    this.currentPage--;
    this.pageList = this.commentList.slice(this.head, this.tail);
    this.prevBtnDisabled = this. head === 0 ? true : false;
    this.nextBtnDisabled = false;
  }

  onNext() {
    this.head += this.pageCapacity;
    this.tail += this.pageCapacity;
    this.currentPage++;
    this.pageList = this.commentList.slice(this.head, this.tail);
    this.nextBtnDisabled = this. tail === this.pageSize * 5 ? true : false;
    this.prevBtnDisabled = false;
  }
}
