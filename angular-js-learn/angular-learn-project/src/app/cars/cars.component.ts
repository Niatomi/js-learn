import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  carName = '';
  carYear = 2000;
  addCarStatus = false;
  cars: { name: string; year: number }[] = [
    {
      name: 'Ford',
      year: 2015,
    },
    {
      name: 'Toyota',
      year: 2013,
    },
    {
      name: 'Lada',
      year: 2007,
    },
    {
      name: 'Niva',
      year: 2015,
    },
    {
      name: 'UAZ',
      year: 2012,
    },
  ];

  dates = [
    new Date(2015, 3, 4).toDateString(),
    new Date(2004, 1, 2).toDateString(),
    new Date(2000, 4, 5).toDateString(),
    new Date(2016, 7, 6).toDateString(),
  ];

  addCar() {
    this.addCarStatus = true;
    let car: { name: string; year: number } = {
      name: this.carName,
      year: this.carYear,
    };
    this.cars.push(car);
    this.carName = '';
    this.carYear = 2000;

    setTimeout(() => {
      this.addCarStatus = false;
    }, 1000);
  }

  constructor() {}
}
