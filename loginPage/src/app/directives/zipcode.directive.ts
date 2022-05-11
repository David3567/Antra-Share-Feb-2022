import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appZipcode]'
})
export class ZipcodeDirective {
  private inputLength: number = 0;

  constructor(private el: ElementRef) { }

  @HostListener('keyup')
  private setInputColor() {
    this.inputLength = this.el.nativeElement.value.length;

    if (this.inputLength !== 5 && this.inputLength !== 0) {
      this.el.nativeElement.classList.add('invalid')
    }
    else {
      this.el.nativeElement.classList.remove('invalid')
    }
  }

}
