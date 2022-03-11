import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-item2',
  templateUrl: './item2.component.html',
  styleUrls: ['./item2.component.css'],
})
export class Item2Component implements OnInit {
  num: number[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.subjectNum$.subscribe((val: any) => {
      this.num = val;
    });
  }
}
