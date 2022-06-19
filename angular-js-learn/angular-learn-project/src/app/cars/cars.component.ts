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
  cars = ['Audi', 'Volga', 'Land Rover'];
  items = [
    { id: 4, name: 'item1' },
    { id: 5, name: 'item2' },
    { id: 2, name: 'item3' },
    { id: 4, name: 'item4' },
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
