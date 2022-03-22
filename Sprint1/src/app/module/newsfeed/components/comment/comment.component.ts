import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { News } from 'src/app/services/interface/news.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  // @Input() commentlist!:News["comment"];
  start:number = 0;
  end:number = 5;
  size:number = 5;
  totalsize!: number;
  comment!: News['comment'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { commentlist: News['comment'] }
  ) {}

  ngOnInit() {
    this.totalsize = this.data.commentlist.length;
    this.comment = [...this.data.commentlist.slice(this.start, this.end)];
  }

  onNext() {
    this.start = this.start + this.size;
    this.end = this.end + this.size;
    this.comment = [...this.data.commentlist.slice(this.start, this.end)];
  }

  onPrev() {
    this.start = this.start - this.size;
    this.end = this.end - this.size;
    this.comment = [...this.data.commentlist.slice(this.start, this.end)];
  }
}
