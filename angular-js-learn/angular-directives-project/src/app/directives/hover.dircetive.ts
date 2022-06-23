import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[hoverBackground]',
})
export class hoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.opacity')
  usingStyle: number = 1;

  ngOnInit(): void {}

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('meow');

    this.usingStyle = 0.9;
    // this.usingStyle = 'mouse-hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.usingStyle = 1;
    // this.textColor = this.defaultColor;
  }
}
