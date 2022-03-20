import { Component, Inject, OnInit } from '@angular/core';
import { Comment, Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariableValue } from 'src/app/services/variable.service';
import { StoryService } from 'src/app/services/story.service';
@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent implements OnInit {
  start!: number;
  end!: number;
  size!: number;
  max!: number;
  totalP!: number;

  comments!: Comment[];
  commentsPerpage!: Comment[];
  pages: number[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story },
    private variableValue: VariableValue
  ) {
    
  }
  ngOnInit(): void {
    this.start = this.variableValue.start;
    this.end = this.variableValue.end;
    this.size = this.variableValue.size;
    this.comments = this.data.story.comment;
    this.max = this.comments.length;
    this.totalP = Math.ceil(this.max / this.size) - 1;
    this.pages = new Array(this.totalP);
    this.commentsPerpage = [...this.comments.slice(this.start, this.size)];
  }
  onNext() {
    this.start = this.start + this.size;
    this.end = this.end + this.size;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }
  onPrevious() {
    this.start = this.start - this.size;
    this.end = this.end - this.size;
    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }
  onGetPage(page: number) {
    this.start = this.variableValue.start + this.size * page;
    this.end = this.variableValue.end + this.size * page;

    this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
  }
}
