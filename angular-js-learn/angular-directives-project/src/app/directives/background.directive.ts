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
  selector: '[appBackground]',
})
export class backgroundDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appBackground')
  hoverColor: string = 'green';

  @Input()
  defaultColor: string = 'transparent';

  @HostBinding('class')
  usingStyle: string = 'mouse-unhover';

  @HostBinding('style.color')
  textColor: string = 'white';

  ngOnInit(): void {
    this.textColor = this.defaultColor;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.textColor = this.hoverColor;
    // this.usingStyle = 'mouse-hover';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.textColor = this.defaultColor;
    // this.renderer.setStyle(this.element, 'color', this.defaultColor);
    // this.usingStyle = 'mouse-unhover';
    // this.renderer.addClass(this.element.nativeElement, 'white-text');
    // this.element.nativeElement.style.backgroundColor = 'red';
  }
}
