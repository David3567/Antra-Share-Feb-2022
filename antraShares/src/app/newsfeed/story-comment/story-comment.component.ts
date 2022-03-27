import { Component, Inject, OnInit } from '@angular/core';
import { Comments, Story } from 'src/app/interfaces/story.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariableValue } from 'src/app/services/variable.service';
import { StoryService } from 'src/app/services/story.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';
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
  page: number = 0;
  comments!: Comments[];
  commentsPerpage!: Comments[];
  pages: number[] = [];
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story },
    private variableValue: VariableValue,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    console.log('oninnit');
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

  onClickAddComment() {
    const dialogRef = this.dialog.open(AddCommentComponent, {
      height: '35%',
      width: '25%',
      data: {
        _id: this.data.story._id,
      },
    });

    dialogRef.afterClosed().subscribe((newcomment) => {
      if (newcomment !== undefined) {
        this.comments = [newcomment,...this.comments ];
        this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
      }
    });
  }
}
