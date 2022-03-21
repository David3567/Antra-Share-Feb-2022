import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { News } from 'src/app/interfaces/news.model';
import { NewsfeedService } from 'src/app/services/newsfeed.service';

@Component({
  selector: 'app-modalContent',
  templateUrl: './modalContent.component.html',
  styleUrls: ['./modalContent.component.less']
})
export class ModalContentComponent implements OnInit {
  @Input() news!: News;
  
  isVisible = false;
  newsList!: any;
  subscribeNewsService = new Subscription();

  constructor(private newsfeedservice: NewsfeedService) { }

  ngOnInit(): void {
    this.newsfeedservice.getNewsFromDataBase()
      .subscribe((data) => { this.newsList = data })
  }

  test() {
    console.log(this);
  }

}
