import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Comments, Story } from 'src/app/services/interface/news.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VariableValue } from 'src/app/services/variable.service';
import { StoryService } from 'src/app/services/newsfeed.service';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { DeleteService } from 'src/app/services/delete.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-story-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class StoryCommentComponent implements OnInit {
  @Input() myFirstInputParameter!: string;
  @Output() deleteCommentEmitter = new EventEmitter<string>();

  start!: number;
  end!: number;
  size!: number;
  max!: number;
  totalP!: number;
  page: number = 0;
  comments!: Comments[];
  commentsPerpage!: Comments[];
  pages: number[] = [];
  allow: boolean = false;
  display: boolean = false;

  userName!: string;
  constructor(
    @Inject(MAT_DIALOG_DATA)
    private data: { story: Story },
    private variableValue: VariableValue,
    public dialog: MatDialog,
    private deleteService: DeleteService
  ) {}
  //
  // console.log("dfadsf")
  //   this.variableValue.newComment.forEach(ele=>{
  //     console.log(ele.id)
  //   })
  ngOnInit(): void {
    this.start = this.variableValue.start;
    this.end = this.variableValue.end;
    this.size = this.variableValue.size;
    this.comments = this.data.story.comment!;
    if (this.variableValue.newComment.length !== 0) {
      this.variableValue.newComment.forEach((ele) => {
        if (ele.id === this.data.story._id) {
          this.comments = [...this.comments, ele.cmt!];
          this.variableValue.newComment = this.variableValue.newComment.filter(
            (data) => data.id !== ele.id
          );
        }
      });
    }
    this.countpage();
    this.commentsPerpage = [...this.comments.slice(this.start, this.size)];
    const token = localStorage.getItem('bearerToken');
    if (token) {
      const decoded: any = jwt_decode(token);
      this.userName = decoded.userName;
      if (decoded.userRole === 'admin') {
        // this.allow = true;
      }
    }
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

  onClickAddComment(input?: string) {
    const dialogRef = this.dialog.open(AddCommentComponent, {
      height: '35%',
      width: '25%',
      data: {
        _id: this.data.story._id,
      },
    });

    dialogRef.afterClosed().subscribe((newcomment) => {
      if (newcomment !== undefined) {
        console.log(newcomment);
        this.comments = [...this.comments, newcomment];
        this.countpage();
        this.commentsPerpage = [...this.comments.slice(this.start, this.end)];
      }
    });
  }
  onDeleteComment(comment: Comments) {
    console.log(comment._id);
    console.log(this.data.story._id);
    if (confirm('Do you want to delete this comment??')) {
      this.deleteService
        .deleteComment(this.data.story._id, comment._id)
        .subscribe(() => {
          this.display = true;
          console.log(this.data.story.comment)
          //this.data.story.comment =  this.data.story.comment.filter((comment) =>  comment._id!=this.data.story.comment._id);
        });
        this.deleteCommentEmitter.emit(comment._id)

    }
  }

  private countpage() {
    this.max = this.comments.length;
    this.totalP =
      this.max % this.size === 0
        ? Math.trunc(this.max / this.size)
        : Math.trunc(this.max / this.size) + 1;
    this.pages = new Array(this.totalP);
  }
}