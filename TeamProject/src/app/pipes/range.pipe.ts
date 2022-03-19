import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(value: any[], min: number, max: number): any {
    while (min < max) {
      value.push(min++);
    }
    return value;
  }
}
