import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { forkJoin, fromEvent, merge } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mergeobs',
  templateUrl: './mergeobs.component.html',
  styleUrls: ['./mergeobs.component.css'],
})
export class MergeobsComponent implements OnInit {
  baseurl = 'https://jsonplaceholder.typicode.com/todos/';
  @ViewChild('one', { static: true }) btnone!: ElementRef;
  @ViewChild('two', { static: true }) btntwo!: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.btnone);

    const one$ = fromEvent(this.btnone?.nativeElement, 'click');
    const two$ = fromEvent(this.btntwo?.nativeElement, 'click');

    merge(one$, two$)
      .pipe(
        map((_) => {
          return Math.floor(Math.random() * 5);
        })
      )
      .subscribe((num) => console.log(num));

    // this.http.get(this.baseurl + '2').subscribe(console.log);
    // forkJoin({
    //   userId: this.http
    //     .get(this.baseurl + '174')
    //     .pipe(map((todo: any) => todo.userId)),
    //   title: this.http
    //     .get(this.baseurl + '23')
    //     .pipe(map((todo: any) => todo.title)),
    // }).subscribe((data) => {
    //   console.log({
    //     ...data,
    //     id: 1,
    //     completed: false,
    //   });
    // });

    // forkJoin([
    //   this.http.get(this.baseurl + '4'),
    //   this.http.get(this.baseurl + '5'),
    // ]).subscribe(console.log);
  }
}
