import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: any = {};
  @Input() postIndex: number = 0;
  @Output() rateEmitter = new EventEmitter<any>();
  

  constructor() { }

  ngOnInit(): void {
  }

  recordRating(rate: number) {
    this.rateEmitter.emit({index: this.postIndex, rate})
  }

}
