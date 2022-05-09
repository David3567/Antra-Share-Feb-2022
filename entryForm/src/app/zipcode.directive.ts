import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
 
@Directive({
  selector: '[zipcode]',
})
export class ZipcodeDirective implements OnInit {
    userInput: any;
 
  @Input() zipcode: boolean;
 
  constructor(private el: ElementRef) {
  }
 
  ngOnInit() {

  }

  @HostListener('keyup', ['$event']) keyevent(event: any) {
      this.userInput = this.el.nativeElement.value+"";
    //   if(/[\D]/.test(this.userInput)) {
    //     if(this.userInput.length != 5) {
    //     this.el.nativeElement.style.borderColor = 'red';
    //     }
    //   } else {
    //     this.el.nativeElement.style.borderColor = 'green';
    //   }
        
      if(this.userInput.length === 5) {
        this.el.nativeElement.style.borderColor = 'green';
      } else {
        this.el.nativeElement.style.borderColor = 'red';
      }
  }


 
}