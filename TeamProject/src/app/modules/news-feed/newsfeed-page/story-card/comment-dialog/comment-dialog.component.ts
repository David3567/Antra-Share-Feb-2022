import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.css'],
})
export class CommentDialogComponent implements OnInit {
  commentList: Comment;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { comment: Comment }) {}

  ngOnInit(): void {
    this.commentList = this.data.comment;
  }
}
