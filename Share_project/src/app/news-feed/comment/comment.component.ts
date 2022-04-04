import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { commentUser } from '../models/commentUser.model';
import { News } from '../models/news.model';
import jwt_decode from "jwt-decode";
import { FormBuilder, FormGroup } from '@angular/forms';

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
  CommentForm!: FormGroup

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
    //changed inject check if have errors
    @Inject(MAT_DIALOG_DATA) 
    private data: { story: News },
    private newsApi: NewsfeedService,
    private fb: FormBuilder,
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
    this.CommentForm = this.fb.group(this.commentBuild());
  }

  private commentBuild() {
    return {
      image: [''],
      video: [''],
      text: [''],
    }
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

  deleteComment(index: any) {
    let commentId = this.data.story.comment[index]._id;
    let postId = this.data.story._id
    this.newsApi.deleteOneComment(postId, commentId).subscribe((data: any) => {
      console.log( "delete data: ", data)
    })
  }

  onSubmit() {
    //FIX PUBLISHER NAME ONCE WE HAVE LOGIN WORKING PROPERLY
    console.log(' ', this.CommentForm.value)
    const commentForm = {
      'publisherName': 'Basel45',
      'content': this.CommentForm.value
    }
    console.log('comment form: ', commentForm)
    this.newsApi.addComment(this.data.story._id, commentForm).subscribe((data: any) => {
      console.log("submit comment: ", data)
    })
  }
}
