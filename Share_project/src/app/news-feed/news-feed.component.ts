import { Component, OnDestroy, OnInit, Pipe, PipeTransform } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { News } from './models/news.model';
import { PoststoryComponent } from './poststory/poststory.component';
import { Store } from '@ngrx/store';
import * as NewsActions from './ngrx/news.action';
import { getStoryList } from './ngrx/news.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit, OnDestroy {
  storyObs!: Observable<News[]>;
  storyList!: News[];
  displays = 5;
  direction = '';
  listArray!: News[];
  finished = false;

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(NewsActions.initStorylist());
    this.store.dispatch(NewsActions.loadStorylist());

    this.storyObs = this.store.select(getStoryList);
    this.storyObs.subscribe((data: News[]) => {
      this.storyList = data;
      this.appendItems();
    });
  }

  getLikedStory() {
    return this.storyList.filter((val) => val.likedIdList.length > 0);
  }

  openDialog() {
    const dialogRef = this.dialog.open(PoststoryComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  onScrollDown(ev: any) {
    console.log('scrolled down!!', ev);
    if (this.displays !== this.storyList.length) {
      this.displays += 1;
      this.appendItems();
    } else {
      this.finished = true;
    }

    this.direction = 'scroll down';
  }

  appendItems() {
    this.listArray = [];
    console.log(this.storyList);
    for (let i = 0; i < this.displays; i++) {
      this.listArray.push(this.storyList[i]);
    }
  }

  ngOnDestroy(): void {
  }
}
