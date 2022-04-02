import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { newsTemplate } from 'src/app/interfaces/news.model';
import { MatDialog } from '@angular/material/dialog';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { LoginService } from 'src/app/services/login.service';
import { GuardService} from 'src/app/services/guard.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css'],
})
export class StoryCardComponent implements OnInit {
  @Input() likedStories: newsTemplate[] = [];
  @Input() story: newsTemplate;
  @Output() likedStoryEmitter = new EventEmitter<string>();
  @Output() deleteStoryEmitter = new EventEmitter<string>();

  constructor(
    private dialog: MatDialog,
    private newsService: NewsfeedService,
    private loginService: LoginService,
    private guardService: GuardService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  openDialog(story: newsTemplate) {
    const dialogRef = this.dialog.open(CommentDialogComponent, {
      data: {
        comment: story.comment,
        _id: story._id
      },
    });
  }

  like(id: string) {
    this.likedStoryEmitter.emit(id);
  }

  toggleLike(id: string): boolean {
    return this.likedStories.find((story) => story._id === id) ? true : false;
  }

  deletePost(storyId: string) {
    this.newsService.deletePost(storyId).subscribe(console.log);
    this.deleteStoryEmitter.emit(storyId);
  }

  checkUser(): boolean {
    if (this.story.publisherName === this.loginService.currentUser["userName"] || this.loginService.currentUser["userRole"] === 'admin') {
      return true;
    } else {
      return false;
    }
  }

  openUserProfile(publisherName : string) {
    console.log("this is workding: the publisher is: " + publisherName);
    console.log(this.loginService.currentUser.userRole);
    if (this.guardService.canActivate()) {  
      this.router.navigate([`profile/${publisherName}`]);  
    } else {
      this.router.navigateByUrl("/newsfeed");  
    }
    
  }


}
