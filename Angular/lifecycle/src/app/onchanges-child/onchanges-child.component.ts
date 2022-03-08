import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Customer } from '../interface/customer.model';

@Component({
  selector: 'app-onchanges-child',
  templateUrl: './onchanges-child.component.html',
  styleUrls: ['./onchanges-child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnchangesChildComponent implements OnInit, OnChanges {
  @Input() message!: string;
  @Input() customer!: Customer;
  changelog: string[] = [];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnChanges');
    console.log(changes);

    for (const propName in changes) {
      const change = changes[propName];
      const to = JSON.stringify(change.currentValue);
      const from = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: changed from ${from} to ${to} `;
      this.changelog.push(changeLog);
    }
  }

  ngOnInit() {
    console.log('OnInit');
  }
}
