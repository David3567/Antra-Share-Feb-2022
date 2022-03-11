import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-item3',
  templateUrl: './item3.component.html',
  styleUrls: ['./item3.component.css'],
})
export class Item3Component implements OnInit {
  num: number[] = [];

  constructor(private subjectService: SubjectService) {}

  ngOnInit(): void {
    this.subjectService.subjectNum$.subscribe((val: any) => {
      this.num = val;
    });
  }
}
