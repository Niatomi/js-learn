import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  @Input()
  car: { name: string; isSold: boolean } = {
    name: '',
    isSold: false,
  };

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true,
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
  }

  constructor() {}

  ngOnInit(): void {}
}
