import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from '../story.interfaces';

@Component({
  selector: 'app-comment-dialog',
  templateUrl: './comment-dialog.component.html',
  styleUrls: ['./comment-dialog.component.scss']
})

export class CommentDialogComponent implements OnInit {
  comment_list!: Comment[];
  comments_page!: Array<any>;
  current_page = 1;
  comments_per_page = 6;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Comment[]) { }

  ngOnInit(): void {
  }


  onNext() {
  }

  onPrev() {
  }

 

}