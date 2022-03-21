import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Story } from 'src/app/interface/interface.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  storycomment!: Story;
  page = null;

  @ViewChild(MatPaginator) pagitnator!: MatPaginator;

  constructor(@Inject(MAT_DIALOG_DATA) private data:{story: Story}) { }

  ngOnInit(): void {
    this.storycomment = this.data.story;
    // this.pagelist = this.storycomment.comment.slice(0,5);

  }

  updateManualPage(index: any){
    this.page = index;
    this.pagitnator.pageIndex = index - 1;
  }

  clearPage(){
    this.page = null;
  }

}
