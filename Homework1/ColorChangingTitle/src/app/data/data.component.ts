import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  // output event to the parent 
  @Output() transferColor = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  // method 
  outputColor(color: string) {
    this.transferColor.emit(color);
  }
}
