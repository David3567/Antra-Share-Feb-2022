import { Component, OnInit } from '@angular/core';
import { Customer } from '../interface/customer.model';

@Component({
  selector: 'app-onchanges',
  templateUrl: './onchanges.component.html',
  styleUrls: ['./onchanges.component.css'],
})
export class OnchangesComponent implements OnInit {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name = '';
  code = 0;

  constructor() {}

  ngOnInit(): void {}

  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }
}
