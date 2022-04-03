import { Component, Input, OnInit } from '@angular/core';
import { Story } from 'src/app/services/interface/news.model';
import { StoryService } from 'src/app/services/newsfeed.service';
import { MatDialog } from '@angular/material/dialog';
import { StoryCommentComponent } from '../comment/comment.component';
import { VariableValue } from 'src/app/services/variable.service';
@Component({
  selector: 'app-story',
  templateUrl: './showstory.component.html',
  styleUrls: ['./showstory.component.scss'],
})
export class StoryComponent implements OnInit {
  @Input('inStory') storyDetail!: Story;
  likedme: boolean = false;
  constructor(
    private storyService: StoryService,
    public dialog: MatDialog,
    public variableValue: VariableValue
  ) {}

  ngOnInit(): void {}
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
      if (this.variableValue.newComment.length > 1) {
        this.variableValue.newComment.forEach((ele) => {
          if (ele.id === this.storyDetail._id) {
            this.storyDetail.comment?.push(ele.cmt!)
          }
        });
      }
    });
  }
}

// name: req.body.name,
// userName: req.body.userName,
// userEmail: req.body.userEmail.toLowerCase(),
// password: req.body.password,

// userRole: req.body.userRole,
// age: req.body.age,
// gender: req.body.gender,
// phone: req.body.phone,