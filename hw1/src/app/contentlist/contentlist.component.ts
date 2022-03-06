import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../interface/content.model';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit {
  @Input() contentlist!: Content;
  @Output() changeColor =  new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitColor(){
    this.changeColor.emit(this.contentlist.color);
    
  }

}
