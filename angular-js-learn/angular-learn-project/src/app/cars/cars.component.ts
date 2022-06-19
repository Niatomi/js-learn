import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  carName = '';
  inputText = 'Default text';
  addCarStatus = false;

  addCar() {
    this.addCarStatus = true;
  }

  constructor() {}
}
