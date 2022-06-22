import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class backgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('class')
  usingStyle: string = 'mouse-unhover';

  ngOnInit(): void {}

  @HostListener('mouseenter')
  onMouseEnter() {
    this;
    this.usingStyle = 'mouse-hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.usingStyle = 'mouse-unhover';
    // this.renderer.addClass(this.element.nativeElement, 'white-text');
    // this.element.nativeElement.style.backgroundColor = 'red';
  }
}
