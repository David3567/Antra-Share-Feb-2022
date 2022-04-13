import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultComponent implements OnInit {

  visible:boolean=false;
  likedList: News[] = [];
  subscribeNewsService = new Subscription();

  constructor(private newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.subscribeNewsService = this.newsfeedservice
    .getLikedList()
    .subscribe((data:any)=>{
      this.likedList = data;
    })
  }

  ngOnDestroy(): void {
    this.subscribeNewsService.unsubscribe();
  }

  openLikedList(): void {
    this.visible = true;
  }

  closeLikedList(){
    this.visible = false;
  }

  deleteLiked(news: News) {
    this.newsfeedservice.deleteFromLikeList(news);
  }
}
