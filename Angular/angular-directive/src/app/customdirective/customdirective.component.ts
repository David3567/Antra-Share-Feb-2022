import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.scss'],
})
export class CustomdirectiveComponent implements OnInit {
  color = '';

  constructor() {}

  ngOnInit(): void {}
}
