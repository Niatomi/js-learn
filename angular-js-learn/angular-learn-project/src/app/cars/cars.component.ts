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

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';

    setTimeout(() => {
      this.addCarStatus = false;
    }, 1000);
  }

  setBigText(car: string) {
    return car.length > 4 ? true : false;
  }

  constructor() {}
}
