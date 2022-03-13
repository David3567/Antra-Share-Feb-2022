import { Component, OnInit, Inject} from '@angular/core';
import { Story } from '../interfaces/story.model';
import { StoryService } from '../services/story.service';

import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
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
      // console.log(data)
      this.stories = storyData;
    })
  }


  onClickLike() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog,{
      position:{
        'bottom' : '45px',
        right: '5%',
      },
      height: '70%',
      width: '30%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });  
  }
}

@Component({
  selector: 'app-likelist',
  templateUrl: 'likelist.component.html',
  
  styleUrls: ['likelist.component.css']
})
export class DialogContentExampleDialog {}