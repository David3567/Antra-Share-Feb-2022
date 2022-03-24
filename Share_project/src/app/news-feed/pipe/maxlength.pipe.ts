import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxlength'
})
export class MaxlengthPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 15) {
      return value.substring(0, 15) + "...";
    }
    return value;
  }

}
