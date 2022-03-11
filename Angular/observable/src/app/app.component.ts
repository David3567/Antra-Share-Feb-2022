import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  fromEvent,
  interval,
  Observable,
  of,
  Subscription,
  throwError,
} from 'rxjs';
import {
  filter,
  map,
  take,
  takeWhile,
  tap,
  switchMap,
  catchError,
  debounceTime,
  mergeMap,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('inputbox', { static: true }) inputbox!: ElementRef;

  sbp$!: Subscription;
  bookname = '';
  booklist: any;

  constructor(private http: HttpClient, private dataService: DataService) {}

  ngOnInit(): void {
    fromEvent(this.inputbox?.nativeElement, 'keyup')
      .pipe(
        switchMap((_) => {
          if (this.bookname.trim()) {
            return this.dataService.getBook(this.bookname);
          } else {
            return of(null);
          }
        })
      )
      .subscribe(
        (val) => console.log(val),
        (err) => {}
      );
  }
  ngOnDestroy(): void {
    this.sbp$.unsubscribe();
  }
}
