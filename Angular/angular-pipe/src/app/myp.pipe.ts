import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myp',
})
export class MypPipe implements PipeTransform {
  transform(value: string, control: boolean): unknown {
    if (value.length > 10 && control) {
      return value.substring(0, 10) + '...';
    }
    return value;
  }
}
