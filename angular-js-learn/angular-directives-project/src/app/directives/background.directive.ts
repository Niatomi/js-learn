import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBackground]',
})
export class backgroundDirective implements OnInit {
  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
