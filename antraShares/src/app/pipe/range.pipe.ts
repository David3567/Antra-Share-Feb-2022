import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'range',
})
export class RangePipe implements PipeTransform {
  transform(value: number[], min: number, max: number) {
    while (min <= max) {
      value.push(min);
      min++;
    }
    return value;
  }
}
