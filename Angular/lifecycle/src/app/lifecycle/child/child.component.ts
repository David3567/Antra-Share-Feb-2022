import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Customer } from 'src/app/interface/customer.model';

@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './child.component.html',
})
export class ChildComponent
  implements
    OnDestroy,
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit
{
  @Input() message: string | undefined;

  customer: Customer = new Customer();
  newCustomer: any;

  constructor() {
    console.log('  ChildComponent:Contructed');
  }

  ngOnChanges(): void {
    console.log('  ChildComponent:ngOnChanges');
  }

  ngOnInit(): void {
    console.log('  ChildComponent:ngOnInit');
  }

  ngDoCheck(): void {
    // this.newCustomer = { ...this.customer };
    console.log('  ChildComponent:DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('  ChildComponent:ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('  ChildComponent:AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('  ChildComponent:AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('  ChildComponent:AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('  ChildComponent:ngOnDestroy');
  }
}
