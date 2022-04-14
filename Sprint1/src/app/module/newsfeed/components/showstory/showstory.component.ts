import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from 'src/app/services/interface/news.model';
import { StoryService } from 'src/app/services/newsfeed.service';
import { MatDialog } from '@angular/material/dialog';
import { StoryCommentComponent } from '../comment/comment.component';
import { VariableValue } from 'src/app/services/variable.service';
import { DeleteService } from 'src/app/services/delete.service';
import jwt_decode from 'jwt-decode';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { AppUserAuth } from 'src/app/core/services/interface/app-user-auth';
import { JwtService } from 'src/app/core/services/jwt.service';

@Component({
  selector: 'app-story',
  templateUrl: './showstory.component.html',
  styleUrls: ['./showstory.component.scss'],
})
export class StoryComponent implements OnInit {
  @Input('inStory') storyDetail!: Story;
  
  @Output() deleteStoryEmitter = new EventEmitter<string>();
  likedme: boolean = false;
  display: boolean = true;
  allow: boolean = false;
  constructor(
    private storyService: StoryService,
    public dialog: MatDialog,
    public variableValue: VariableValue,
    private authService: AuthService,
    private router: Router,
    private deleteService: DeleteService,
    private jwt: JwtService,
  ) {
  }

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
  deletePost(id: string) {
    this.deleteService.deletePost(id).subscribe((res) => console.log(res));
    this.deleteStoryEmitter.emit(id);
  }
  onDeletePost(story: Story) {
    if (confirm('Do you want to delete this post??')) {
      this.deleteService.deletePost(story._id).subscribe(() => {
        this.display = false;
      });
    }
  }
  checkUserRole(): boolean {
    // console.log("SHow", this.securityObj);
    if (
      this.jwt.getjwt().isAuthenticated ||
      this.storyDetail.publisherName === this.jwt.getjwt().userName
    ) {
      return true;
    } else {
      return false;
    }
  }
  // lookProfile(username: string) {
  //   // console.log(['profile', username].join('/'));
  //   this.router.navigate(['profile', {username:username}]);
  // }
}