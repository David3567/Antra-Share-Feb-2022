import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  // title = 'angular-pipe';
  // num = 5.4;
  // obj = {
  //   name: 'jojo',
  //   age: 12,
  //   company: 'jump',
  //   sex: 'female'
  // };

  users: any;
  users$: any;

  subscription!: Subscription;

  showString = true;
  pipeString =
    // tslint:disable-next-line: max-line-length
    'Use pipes to transform strings, currency amounts, dates, and other data for display. Pipes are simple functions you can use in template expressions to accept an input value and return a transformed value. Pipes are useful because you can use them throughout your application, while only declaring each pipe once. For example, you would use a pipe to show a date as April 15, 1988 rather than the raw string format.';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // this.subscription = this.dataService.getUsers().subscribe((users) => {
    //   this.users = users;
    // },
    // err => {});
    this.users$ = this.dataService.getUsers();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  removeSort() {
    return 0;
  }

  control() {
    this.showString = !this.showString;
  }

}
