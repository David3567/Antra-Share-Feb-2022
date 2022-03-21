import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-default-layout-content',
  templateUrl: './default-layout-content.component.html',
  styleUrls: ['./default-layout-content.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultLayoutContentComponent implements OnInit, OnDestroy {

  visible:boolean=false;
  likedList: News[] = [];
  subscribeNewsService = new Subscription();

  constructor(private newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.subscribeNewsService = this.newsfeedservice
    .getLikedList()
    .subscribe((data:any)=>{
      //console.log(data)
      this.likedList = data;
      //console.log(this.likedList)
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
