import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ChangeDetectorRef, OnChanges, SimpleChanges, HostBinding } from '@angular/core';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.less'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class NewsfeedComponent implements OnInit, OnChanges{

  newsList!: News[];
  completed: boolean = false;
  isCollapsed = false;
  visible = false;

  constructor(private cdr:ChangeDetectorRef, public newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe(
        (data) => { 
          this.newsList = data;
          this.newsList=this.newsList.filter(item=>{
            if(item.content.image.slice(0,4)==='http')
              return item;
            else {
              item.content.image='http://via.placeholder.com/640x360';
              return item;
            };
          })
          this.cdr.detectChanges();
         }
      )
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  addLike(news:News){
    this.newsfeedservice.addToLikeList(news);
  }

  deleteLiked(news: News) {
    this.newsfeedservice.deleteFromLikeList(news);
  }

  goToLogin() {
    location.href = "http://localhost:4200/login";
  }
}
