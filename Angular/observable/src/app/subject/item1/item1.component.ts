import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';

@Component({
  selector: 'app-item1',
  templateUrl: './item1.component.html',
  styleUrls: ['./item1.component.css'],
})
export class Item1Component implements OnInit {
  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {}

  add() {
    this.subjectService.addNum();
  }
}
