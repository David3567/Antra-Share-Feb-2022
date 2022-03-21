import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from '../story.interfaces';

@Component({
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {
  commentslist!: Comment[];
  pageofComments!: Array<any>;
  current_page:number = 1;
  records_per_page = 5;

  show_prev: boolean = false;
  show_next: boolean = true;



  constructor(@Inject(MAT_DIALOG_DATA) public datas: Comment[]) { }

  ngOnInit(): void {

  }
  onNext(){
    if (+this.current_page < +this.numPages()) {
      this.current_page++;
      this.changeIcon();
    }
  }

  onPrevious() {
    if (this.current_page > 1) {
      this.current_page--;
      this.changeIcon();
    }
  }
  numPages() {
    return Math.ceil(this.datas.length / this.records_per_page);
  }

  changeIcon() {

    if (this.current_page === this.numPages()) {
      this.show_next = false;
    } else {
      this.show_next = true;
    }
    if (this.current_page !== 1) {
      this.show_prev = true;
    } else {
      this.show_prev = false;
    }
  }

}
