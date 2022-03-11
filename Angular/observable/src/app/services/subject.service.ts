import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  arr: number[] = [];
  subjectNum$ = new Subject();

  constructor() {}

  addNum() {
    this.arr = [...this.arr, this.generateRandomNum()];
    this.subjectNum$.next(this.arr);
  }

  generateRandomNum() {
    return Math.floor(Math.random() * 200 + 1);
  }
}
