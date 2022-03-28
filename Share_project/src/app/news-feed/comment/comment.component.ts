import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { commentUser } from '../models/commentUser.model';
import { News } from '../models/news.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  start: number = 0;
  end: number = 3;
  paginationSize: number = 3;
  max!: number;
  totalPages!: number;
  page: number = 0;
  comments!: commentUser[];
  commentsPerpage!: commentUser[];
  pages: number[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: News },
  ) {}

  ngOnInit(): void {
    this.start = this.start;
    this.end = this.end;
    this.paginationSize = this.paginationSize;
    this.comments = this.data.story.comment;
    this.max = this.comments.length;
    this.totalPages = this.max % this.paginationSize === 0 ? Math.trunc(this.max / this.paginationSize) : Math.trunc(this.max / this.paginationSize) + 1;
    this.pages = new Array(this.totalPages);
    this.commentsPerpage = [...this.comments.slice(this.start, this.paginationSize)];
  }

  onNext() {
    this.page++;
    this.start = this.start + this.paginationSize;
    this.end = this.end + this.paginationSize;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }

  onPrevious() {
    this.page--;
    this.start = this.start - this.paginationSize;
    this.end = this.end - this.paginationSize;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }

  onSubmit() {
    console.log('hello')
  }

}
