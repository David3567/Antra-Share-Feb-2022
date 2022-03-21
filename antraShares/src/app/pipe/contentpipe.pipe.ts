import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contentpipe'
})
export class ContentpipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
