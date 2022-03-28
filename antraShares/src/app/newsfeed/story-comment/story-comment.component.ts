import { Component, Inject, OnInit } from '@angular/core';
import { Comment, Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariableValue } from 'src/app/services/variable.service';
import { StoryService } from 'src/app/services/story.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentService } from 'src/app/services/comment.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent implements OnInit {
  form!: FormGroup;
  start!: number;
  end!: number;
  size!: number;
  max!: number;
  totalP!: number;
  page: number = 0;
  comments!: Comment[];
  commentsPerpage!: Comment[];
  pages: number[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story },
    private variableValue: VariableValue,
    private fb: FormBuilder,
    private commentService: CommentService
  ) {
    this.form = this.fb.group(this.buildForm());
  }

  buildForm(){
    return {
      comment: ['', [Validators.required]]
    };
  }

  get comment() {
    return this.form.get('comment');
  }

  ngOnInit(): void {
    this.start = this.variableValue.start;
    this.end = this.variableValue.end;
    this.size = this.variableValue.size;
    this.comments = this.data.story.comment;
    this.max = this.comments.length;
    this.totalP =
      this.max % this.size === 0
        ? Math.trunc(this.max / this.size)
        : Math.trunc(this.max / this.size) + 1;
    this.pages = new Array(this.totalP);
    this.commentsPerpage = [...this.comments.slice(this.start, this.size)];
  }
  onNext() {
    this.page++;
    this.start = this.start + this.size;
    this.end = this.end + this.size;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }
  onPrevious() {
    this.page--;
    this.start = this.start - this.size;
    this.end = this.end - this.size;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }
  onGetPage(page: number) {
    this.page = page;
    this.start = this.variableValue.start + this.size * page;
    this.end = this.variableValue.end + this.size * page;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }

  onSubmit() {
    const token = localStorage.getItem('bearerToken');
    let decoded: any = null;
    if (token) decoded = jwt_decode(token);
    console.log(decoded)
    const newComment: Comment = {
      publisherName: decoded.userEmail,
      publishedTime: new Date(Date.now()),
      content: {
        image: "",
        video: "",
        text: this.comment?.value,
        _id: this.data.story._id,
      },
      _id: this.data.story._id,
    }

    this.commentService.addNewComment(newComment).subscribe((newComment: Comment) => {
      console.log(newComment)
    });
  }
}
