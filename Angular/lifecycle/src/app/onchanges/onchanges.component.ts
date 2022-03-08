import { Component, DoCheck, OnInit } from '@angular/core';
import { Customer } from '../interface/customer.model';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css'],
})
export class OnchangesComponent implements OnInit {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer(); // {}

  // name = '';
  // code = 0;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.customer = { ...this.customer };
  }

  updateCustomer() {
    // this.customer = {
    //   ...this.customer,
    //   name: this.name,
    //   code: this.code,
    // };
    // this.customer.name = this.name;
    // this.customer.code = this.code;
  }
}
