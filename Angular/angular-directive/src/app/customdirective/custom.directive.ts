import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[colorDirective]',
})
export class CustomDirective implements OnInit {
  @Input() defaultColor = '';
  @Input('color') color = '';

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.color || this.defaultColor || 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
