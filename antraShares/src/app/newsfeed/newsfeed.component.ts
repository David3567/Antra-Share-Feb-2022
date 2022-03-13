import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Story } from '../interfaces/story.model';
import { StoryService } from '../services/story.service';

import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css'],
})
export class NewsfeedComponent implements OnInit, OnDestroy {
  stories!: Story[];
  subcribeStoryService! :Subscription;
  constructor(private storyService: StoryService, public dialog: MatDialog) {}

  ngOnInit(): void {
    //story display
    // this.storyService.getStories().subscribe((storyData: any) => {
    //   this.stories = storyData;
    // });
    this.subcribeStoryService = this.storyService.getStories().subscribe((storyData: any) => {
        this.stories = storyData;
     });
  }

  ngOnDestroy(): void {
    // this.subscribeBookService.unsubscribe();
    this.subcribeStoryService.unsubscribe();
  }
  onClickLike() {
    const dialogRef = this.dialog.open(DialogContentLikeList, {
      position: {
        bottom: '45px',
        right: '5%',
      },
      height: '70%',
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'app-likelist',
  templateUrl: 'likelist.component.html',

  styleUrls: ['likelist.component.css'],
})
export class DialogContentLikeList implements OnInit {
  likeListStories!:Story[];
  subscribeStoryService = new Subscription();
  constructor(private storyService: StoryService) {}
  ngOnInit(): void {
    // like list
    this.subscribeStoryService = this.storyService.subjectLikeList$.subscribe(
      (story: any) => {
        console.log("data1  :"+ story);
        this.likeListStories = story;
        console.log("books: ", this.likeListStories);
        console.log("books: ", typeof(this.likeListStories));
      }
    );
  }
}
