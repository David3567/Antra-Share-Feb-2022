import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/services/getNews.service';
import { News } from 'src/services/news.model';

@Component({
  selector: 'app-newsfeed-page',
  templateUrl: './newsfeed-page.component.html',
  styleUrls: ['./newsfeed-page.component.scss']
})
export class NewsfeedPageComponent implements OnInit {
  news!: News[];

  constructor(private service: GetNewsService) { }

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.service.getNews().subscribe((result)=>{
      this.news = result;
    })
  }
}
