import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Story } from '../../interface/story.interfaces';
import { MatDialog } from '@angular/material/dialog';
import { CommentComponent } from '../comment/comment.component';
import { Variables } from 'src/app/core/globalVariable';
import { DeleteService } from 'src/app/core/delete.service';
import { Subscription } from 'rxjs';
import { NewUser } from 'src/app/interface/newuser.model';
import { ProfileService } from 'src/app/core/profile.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() storiesdetail!: Story;
  @Input() currentUser!: string;
  @Input() currentUserRole!: string;
  @Output() deleteStoryEmitter = new EventEmitter();

  liked: boolean = false;
  deletePostTrigger: boolean = false;
  subscriptionProfile$ = new Subscription();
  userList!: NewUser;

  constructor(
    // private deleteservice: DeleteService,
    private profileService: ProfileService,
    private newsfeedservice: NewsfeedService,
    public dialog: MatDialog,
    public variable: Variables,
    private router: Router) { }

  ngOnInit(): void {
  }

  onToProfile(name: string) {
    this.subscriptionProfile$ = this.profileService.
      getProfile(name).subscribe((data: any) => {
        this.userList = data;
        console.log(this.userList);
        this.profileService.updateCurrentUser(this.userList);
        this.router.navigate(['profile']);

      })
    
    
    

  }

  ngOnDestroy(): void {
    this.subscriptionProfile$.unsubscribe();
  }

  showComment() {
    this.dialog.open(CommentComponent, {
      width: '600px',
      height: '700px',
      data: {
        comment: this.storiesdetail.comment,
        id: this.storiesdetail._id,
        currUser: this.currentUser,
        currUserRole: this.currentUserRole
      }
    })
  }

  onLiked(data: Story) {
    this.liked = !this.liked;
    if (this.liked === true) {
      if (this.variable.removed.indexOf(data._id) !== -1) {
        this.liked = !this.liked;
        this.variable.removed = this.variable.removed.filter(
          (ele) => ele !== data._id
        );
      }
      this.newsfeedservice.pushToLikedList(data);
    } else {
      this.newsfeedservice.removeFromLikedList(data);
    }
  }

  onDeleteStory() {
    this.deleteStoryEmitter.emit(this.storiesdetail._id);
  }
}

