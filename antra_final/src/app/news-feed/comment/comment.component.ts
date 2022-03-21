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
  constructor(@Inject(MAT_DIALOG_DATA) public datas: Comment[]) { }

  ngOnInit(): void {
    if (this.datas.length < 10) {
      this.commentslist = {...this.datas};
    }
    else if(this.datas.length > 10){
      this.commentslist = {...this.datas.slice(0,10)};
    }
    console.log(this.commentslist);
  }
  next(){
    if (this.datas.length < 10) {
      console.log("no more");
    }
    else if (this.datas.length > 10 && this.datas.length <20){
      this.commentslist = {...this.datas.slice(10,this.datas.length)};
    }
    else if (this.datas.length > 20){
      this.commentslist = {...this.datas.slice(10,20)};
    }
  }
}
