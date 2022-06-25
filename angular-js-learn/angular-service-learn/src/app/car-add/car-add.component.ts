import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carName: string = '';

  @Output()
  onAddCar = new EventEmitter<String>();

  addCar() {
    this.onAddCar.emit(this.carName);
    this.carName = '';
  }

  constructor() {}

  ngOnInit(): void {}
}
