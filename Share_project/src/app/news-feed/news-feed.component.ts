import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
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

  constructor(public dialog: MatDialog, private api:NewsfeedService) { }

  ngOnInit(): void {
    this.api.getStories().subscribe((data: any) => {
      this.storyList = data;
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(FavoriteListComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
