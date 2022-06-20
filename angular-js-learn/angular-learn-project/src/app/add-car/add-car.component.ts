import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  carName = '';
  carYear = 2000;
  addCarStatus = false;

  @Output()
  onAddCar = new EventEmitter<{ name: string; year: number }>();

  addCar() {
    this.onAddCar.emit({
      name: this.carName,
      year: this.carYear,
    });
    this.carName = '';
    this.carYear = 2000;
    this.addCarStatus = false;
  }

  constructor() {}
}
