import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/interfaces/story.model';
import { StoryService } from 'src/app/services/story.service';
import { MatDialog } from '@angular/material/dialog';
import { StoryCommentComponent } from '../story-comment/story-comment.component';
import { VariableValue } from 'src/app/services/variable.service';
import { DeleteService } from 'src/app/services/delete.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
})
export class StoryComponent implements OnInit {
  @Input('inStory') storyDetail!: Story;
  likedme: boolean = false;
  display: boolean = true;
  allow: boolean = false;
  constructor(
    private storyService: StoryService,
    public dialog: MatDialog,
    public variableValue: VariableValue,
    private deleteService: DeleteService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('bearerToken');
    if (token) {
      const decoded: any = jwt_decode(token);
      if (
        decoded.userRole === 'admin' ||
        decoded.userName === this.storyDetail.publisherName
      ) {
        this.allow = true;
      }
    }
  }
  addToLikeList(story: Story) {
    this.likedme = !this.likedme;
    if (this.variableValue.remove.indexOf(story._id!) !== -1) {
      this.likedme = !this.likedme;
      this.variableValue.remove = this.variableValue.remove.filter(
        (re) => re !== story._id
      );
    }
    this.storyService.pushIntoLikeList(story);
  }
  onClickComment(story: Story) {
    const dialogRef = this.dialog.open(StoryCommentComponent, {
      height: '70%',
      width: '50%',
      data: {
        story: story,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (this.variableValue.newComment.length !== 0) {
        this.variableValue.newComment.forEach((ele) => {
          if (ele.id === this.storyDetail._id) {
            this.storyDetail.comment?.push(ele.cmt!);
          }
        });
      }
    });
  }
  onDeletePost(story: Story) {
    if (confirm('Do you want to delete this post??')) {
      this.deleteService.deletePost(story._id).subscribe(() => {
        this.display = false;
      });
    }
  }
}
