import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { from, fromEvent, interval, Observable, of, Subscription } from 'rxjs';
import { filter, map, take, takeWhile, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  title = 'observable';
  observable$ = from([3, 4, 5]);
  val = '';
  clear: any = [];

  // sbp$ = new Subscription()
  sbp$!: Subscription;

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
    // of(1, 2, 3)
    // of(1, 2, 3, 1, 2, 3, 1, 2, 3).pipe(take(4)).subscribe(console.log);
    // this.sbp$ = fromEvent(this.inputbox?.nativeElement, 'keyup')
    //   .pipe(filter((e: any) => e.code === 'Enter'))
    //   .subscribe((e) => {
    //     console.log(this.val);
    //   });
  }

  ngOnDestroy(): void {
    this.sbp$.unsubscribe();
  }

  onclickthebtn() {
    let num = 0;
    this.clear.push(
      setInterval(() => {
        console.log(num);
        num++;
      }, 1000)
    );
  }
  stopalldatastream() {
    console.log(this.clear);
    this.clear.forEach((ele: any) => {
      clearInterval(ele);
    });
  }

  getUsers() {
    this.getUsers$.subscribe();
  }
}
