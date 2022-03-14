import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Story } from 'src/app/interface/interface.model';

@Component({
  selector: 'app-likelist',
  templateUrl: './likelist.component.html',
  styleUrls: ['./likelist.component.scss']
})
export class LikelistComponent implements OnInit {
  @Input() like!: Story;
  @Output() addlikeEmiter = new EventEmitter();
  @Output() unlikeEmiter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  addlike(){
    this.addlikeEmiter.emit(this.like._id);
  }

  unlike(){
    this.unlikeEmiter.emit(this.like._id);
  }

}
