import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConsoleService } from '../console.service';

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

  constructor(private consoleService: ConsoleService = new ConsoleService()) {}

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true,
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy' ? true : false;
    this.consoleService.log('abobaJS');
  }

  ngOnInit(): void {}
}
