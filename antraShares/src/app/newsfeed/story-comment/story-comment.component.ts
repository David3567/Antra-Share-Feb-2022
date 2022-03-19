import { Component, Inject, OnInit } from '@angular/core';
import { Comment, Story } from 'src/app/interfaces/story.model';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-story-comment',
  templateUrl: './story-comment.component.html',
  styleUrls: ['./story-comment.component.css'],
})
export class StoryCommentComponent implements OnInit {
  current = 0;
  next = 4;
  size = 4;
  comments!: Comment[];
  commentsPerpage!: Comment[];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story }
  ) {
    console.log('constructor');
    this.comments = this.data.story.comment;
  }
  ngOnInit(): void {
    this.commentsPerpage = [...this.comments.slice(this.current, this.size)];
  }
  onNext(page: number) {
    this.current = this.current + this.size;
    this.next = this.next + this.size;
    this.commentsPerpage = [...this.comments.slice(this.current, this.next)];
  }
}
