import { Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewsfeedService } from '../services/newsfeed.service';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { News } from './models/news.model';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss']
})
export class NewsFeedComponent implements OnInit {
  storyList!: News[];
  displays = 2;
  direction = "";
  listArray:News[] = [];
  finished = false;

  constructor(public dialog: MatDialog, private api:NewsfeedService) { }

  ngOnInit(): void {
    this.api.getStories().subscribe((data: any) => {
      this.storyList = data;
      console.log(data)
      this.appendItems();
    });
    
  }

  getLikedStory() {
    return this.storyList.filter(val => val.likedIdList.length > 0);
  }

  openDialog() {
    const dialogRef = this.dialog.open(FavoriteListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onScrollDown(ev: any) {
    console.log("scrolled down!!", ev);
    if (this.displays !== this.storyList.length) {
      this.displays += 1;
      this.appendItems();
    }
    else {
      this.finished = true;
    }
    
    
    this.direction = "scroll down";
  }

  appendItems() {
      this.listArray = [];
      for (let i = 0; i < this.displays; i++) {
        this.listArray.push(this.storyList[i]);
      }
    
  }

}
