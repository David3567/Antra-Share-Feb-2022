import { Component, OnInit, Inject} from '@angular/core';
import { Story } from '../interfaces/story.model';
import { StoryService } from '../services/story.service';
import { LikeListComponent } from './likelist/likelist.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})

export class NewsfeedComponent implements OnInit {
  stories! :Story[];
  constructor(private storyService : StoryService ,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.storyService.getStories().subscribe((storyData:Story[])=>{
      this.stories = storyData;
    })
  }


  onClickLike() {
    const dialogRef = this.dialog.open(LikeListComponent,{
      position:{
        'bottom' : '45px',
        right: '5%',
      },
      height: '70%',
      width: '50%',
      data: this.stories
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });  
  }
}
