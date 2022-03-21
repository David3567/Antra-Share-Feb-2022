import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { NewsfeedService } from 'src/app/core/newsfeed.service';
import { Story } from '../story.interfaces';


@Component({
  selector: 'app-story-card',
  templateUrl: './story-card.component.html',
  styleUrls: ['./story-card.component.css']
})
export class StoryCardComponent implements OnInit {
  @Input() storiesdetail!: Story;
  current_page = 1;
  records_per_page = 3;
  show_prev: boolean = false;
  show_next: boolean = true;
  // @ViewChild('btn_prev', { static: true }) btn_prev!: ElementRef;
  // @ViewChild('btn_next', { static: true }) btn_next!: ElementRef;

  constructor(private newsfeedservice: NewsfeedService) { }
  ngOnInit(): void {

    console.log(this.storiesdetail.comment);
    // this.prevPage();
    // this.nextPage();

  }

  liked(data: Story) {
    this.newsfeedservice.pushToLikedList(data);
  }

  prevPage() {
    if (this.current_page > 1) {
      this.current_page--;
      this.changeIcon();
    }
  }

  nextPage() {
    if (+this.current_page < +this.numPages()) {
      this.current_page++;
      this.changeIcon();
    }

  }

  numPages() {
    return Math.ceil(this.storiesdetail.comment.length / this.records_per_page);
  }

  changeIcon() {
   
    if (this.current_page === this.numPages()) {
      this.show_next = false;
    } else {
      this.show_next = true;
    }
    if (this.current_page !== 1) {
      this.show_prev = true;
    } else {
      this.show_prev = false;
    }
  }

}

