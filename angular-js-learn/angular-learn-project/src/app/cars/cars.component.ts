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
  cars = ['Audi', 'Volga', 'Land Rover', 'BMW', 'Bentley', 'UAZ'];
  dates = [
    new Date(2015, 3, 4).toDateString(),
    new Date(2004, 1, 2).toDateString(),
    new Date(2000, 4, 5).toDateString(),
    new Date(2016, 7, 6).toDateString(),
  ];

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';

    setTimeout(() => {
      this.addCarStatus = false;
    }, 1000);
  }

  constructor() {}
}
