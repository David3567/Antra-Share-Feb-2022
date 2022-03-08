import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  title = 'observable';
  observable$ = from([3, 4, 5]);
  val = '';

  getUsers$ = this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
    map((users: any) => {
      return users.map((user: any) => {
        return {
          ...user,
          username: `${user.username} - (${user.name})`,
        };
      });
    }),
    tap((users) => {
      console.log(users);
    })
  );

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    fromEvent(this.inputbox.nativeElement, 'keyup')
      .pipe(filter((e: any) => e.code === 'Enter'))
      .subscribe((e) => {
        console.log(this.val);
      });
  }

  getUsers() {
    this.getUsers$.subscribe();
  }
}
