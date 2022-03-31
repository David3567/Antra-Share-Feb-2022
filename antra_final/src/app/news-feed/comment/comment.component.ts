import { Component, OnInit, Inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Comment } from '../story.interfaces';

@Component({
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})

export class CommentComponent implements OnInit {
  pageofComments!: Array<any>;
  current_page: number = 1;
  records_per_page = 5;
  pagelength!: number;
  CommentForm!: FormGroup;
  pageArray: any[] = [];
  commentObject: any;
  datas: Comment[] = this.passeddata.comment;
  id: string = this.passeddata.id;

  get image() {
    return this.CommentForm.get('image');
  }
  get video() {
    return this.CommentForm.get('video');
  }
  get text() {
    return this.CommentForm.get('text');
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public passeddata: any,
    private fb: FormBuilder,
    private newsfeedService: NewsfeedService
  ) { }

  ngOnInit(): void {
    this.pagelength = Math.ceil(this.datas.length / this.records_per_page);
    this.pageArray.push('Prev');
    for (let i = 1; i <= this.pagelength; i++) {
      this.pageArray.push(i);
      console.log(this.pageArray);
    }
    this.pageArray.push('Next');
    
    this.CommentForm = this.fb.group(this.buildform());
  }

  onNext() {
    if (+this.current_page < +this.pagelength) {
      this.current_page++;
    }
  }

  onPrevious() {
    if (this.current_page > 1) {
      this.current_page--;
    }
  }

  setPage(page: any) {
    if (page == 'Prev' && this.current_page > 1) {
      this.current_page -= 1;
    } else if (page == 'Next' && this.current_page < this.pagelength) {
      this.current_page += 1;
    } else if (page > 0 && page <= this.pagelength) {
      this.current_page = page;
    }
    console.log(this.current_page);
  }

  buildform() {
    return {
      image: [''],
      video: [''],
      text: [''],
    };
  }

  onSubmit() {
    this.commentObject = {
      'publisherName': 'username',
      'content': this.CommentForm.value,
    };
    this.newsfeedService.addNewComment(this.id, this.commentObject).subscribe((data: Comment)=>{
      console.log(data);
    })
    // console.log(this.id);
    // console.log(this.commentObject);
  }
}
