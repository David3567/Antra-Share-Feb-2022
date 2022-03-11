import { Component, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit {
  // obj$ = new Observable((subscriber) => {
  //   subscriber.next(1);
  //   subscriber.next(2);
  //   subscriber.next(3);
  // });
  // subj$ = new Subject();

  observable$ = new Observable<number>((subscriber) => {
    subscriber.next(Math.floor(Math.random() * 200) + 1);
  });

  subject$ = new Subject();

  constructor() {}

  ngOnInit(): void {
    // this.observable$.subscribe((val) => {
    //   console.log('Obs1 :' + val);
    // });
    // this.observable$.subscribe((val) => {
    //   console.log('Obs2 :' + val);
    // });
    // this.subject$.subscribe((val) => {
    //   console.log('Sub1 ' + val);
    // });
    // this.subject$.subscribe((val) => {
    //   console.log('Sub2 ' + val);
    // });
    // this.subject$.next(Math.floor(Math.random() * 200) + 1);
    // // of(1, 2, 3)
    // // this.obj$.subscribe((data) => {
    // //   console.log('O1: ', data);
    // // });
    // // this.obj$.subscribe((data) => {
    // //   console.log('O2: ', data);
    // // });
    // this.subj$.next(1);
    // this.subj$.next(2);
    // this.subj$.next(3);
    // this.subj$.subscribe((data) => {
    //   console.log('S1: ', data);
    // });
    // this.subj$.next(4);
    // this.subj$.next(5);
    // this.subj$.next(6);
    // this.subj$.subscribe((data) => {
    //   console.log('S2: ', data);
    // });
    // this.subj$.next(7);
    // this.subj$.next(8);
    // this.subj$.next(9);
  }
}
