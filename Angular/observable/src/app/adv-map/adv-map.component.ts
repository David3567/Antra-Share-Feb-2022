import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { fromEvent, Observable, of, Subscription } from 'rxjs';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-adv-map',
  templateUrl: './adv-map.component.html',
  styleUrls: ['./adv-map.component.css'],
})
export class AdvMapComponent implements OnInit, OnDestroy {
  @ViewChild('button', { static: true }) button!: ElementRef;
  // subscription$!: Subscription;
  count = 0;

  ngOnInit() {}

  ngAfterViewInit() {
    // of(1, 2, 3)
    //   .pipe(
    //     map((num) => {
    //       return of(4, 5, 6);
    //     })
    //   )
    //   .subscribe(console.log);

    fromEvent(this.button?.nativeElement, 'click')
      .pipe(
        concatMap(() => {
          this.count++;
          return this.delayedObs(this.count);
        })
      )
      .subscribe((val) => console.log(val));
  }

  ngOnDestroy(): void {
    // this.subscription$.unsubscribe();
  }

  private delayedObs(count: number) {
    return new Observable((observer) => {
      let timer = 500;
      const arr = ['A', 'B', 'C', 'D', 'E'];
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          observer.next(`${count} ${arr[i]}`);
          if (arr[i] === 'E') {
            observer.complete();
          }
        }, (i + 1) * timer);
      }
    });
  }
}
