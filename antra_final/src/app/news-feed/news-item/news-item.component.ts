import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/core/news.service';
import { News } from 'src/app/interface/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() newsInfo!: News;
  like: boolean = true;

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
  }

  addLiked(data: News) {
    
    if (this.like) {
      this.like = false;
      this.newService.addToLikedList(data);
    }
  }
}
