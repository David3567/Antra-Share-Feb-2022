import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-comments-pop-up',
  templateUrl: './comments-pop-up.component.html',
  styleUrls: ['./comments-pop-up.component.css']
})
export class CommentsPopUpComponent implements OnInit {
  @Input() comments;
  totalPages: number;
  pageNumbers: number[] = [];
  currentPage = 0;
  currentComments;

  constructor(@Inject(MAT_DIALOG_DATA) private data: {comments}) { }

  ngOnInit(): void {
    this.comments = this.data.comments;
    this.currentComments = this.comments.slice(0,4);
    this.totalPages = Math.ceil(this.comments.length/4);
    
    for (let i = 1 ; i<= this.totalPages; i++) {
      this.pageNumbers.push(i);
    }
  }

  updateComments(page) {
    this.currentPage = page;
    this.currentComments = this.comments.slice( 0 + page*4 , 4 + page*4 )
  }

}
