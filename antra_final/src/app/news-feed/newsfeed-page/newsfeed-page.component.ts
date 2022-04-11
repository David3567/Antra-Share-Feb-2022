import { Component, OnDestroy, OnInit} from '@angular/core';
import { Story } from '../story.interfaces';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.css']
})
export class NewsfeedPageComponent implements OnInit, OnDestroy {
  Storieslist!: Story[];
  subsciptionStories$ = new Subscription();

  constructor(private newsfeedservice: NewsfeedService) { }

  ngOnInit (): void {
    this.subsciptionStories$ = this.newsfeedservice.getStoris().subscribe((data: Story[])=>{
      this.Storieslist = data;
    })
  }
  openDialog(){}

  ngOnDestroy(): void {
    this.subsciptionStories$.unsubscribe();
  }
}


