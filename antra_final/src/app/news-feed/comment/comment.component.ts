import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Comment } from '../story.interfaces';

@Component({
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {
  pageofComments!: Array<any>;
  current_page: number = 1;
  records_per_page = 5;
  pagelength!: number;
  // show_prev: boolean = false;
  // show_next: boolean = true;
  pageArray: any[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public datas: Comment[]) { }

  ngOnInit(): void {
    this.pagelength = Math.ceil(this.datas.length / this.records_per_page);
    this.pageArray.push("Prev");
    for (let i = 1; i <= this.pagelength; i++) {
      this.pageArray.push(i);
      console.log(this.pageArray);
    }
    this.pageArray.push("Next");
  }
  onNext() {
    if (+this.current_page < +this.pagelength) {
      this.current_page++;
      // this.changeIcon();
    }
  }

  onPrevious() {
    if (this.current_page > 1) {
      this.current_page--;
      // this.changeIcon();
    }
  }

  // changeIcon() {
  //   if (this.current_page === this.pagelength) {
  //     this.show_next = false;
  //   } else {
  //     this.show_next = true;
  //   }
  //   if (this.current_page !== 1) {
  //     this.show_prev = true;
  //   } else {
  //     this.show_prev = false;
  //   }
  // }

  setPage(page: any) {
    if (page == "Prev" && (this.current_page > 1)) { this.current_page -= 1; }
    else if (page == "Next" && (this.current_page < this.pagelength)) {
      this.current_page += 1
    }
    else if (page > 0 && page <= this.pagelength) {
      this.current_page = page;
    }
    console.log(this.current_page);
  }

}
