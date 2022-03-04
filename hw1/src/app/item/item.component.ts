import { style } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../interfaces/list.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item!: Item;
  @Output() itemIdEmiter = new EventEmitter();
  @Input() selectedNum!: Number;

  selected = false;

  constructor() { }

  ngOnInit(): void {
  }

  clickSelector(): void {
    console.log(this.item.id);
    this.itemIdEmiter.emit(this.item.id);
  }

  checkCurrent() {
    console.log(this.selectedNum)
    if (this.selectedNum == this.item.id) {
      return '2px 2px 5px 5px ' + this.item.color;
    }
    else {
      return 'none';
    }
    
  }
}
