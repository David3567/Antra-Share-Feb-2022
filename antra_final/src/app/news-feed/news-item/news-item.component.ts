import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/core/news.service';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent implements OnInit {
  @Input() newsInfo: any;

  constructor(private newService: NewsService) { }

  ngOnInit(): void {
  }

  addLiked(data: any) {
    this.newService.addToLikedList(data);
    
  }


}
