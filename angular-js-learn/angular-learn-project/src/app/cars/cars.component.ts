import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
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

  constructor() {}

  updateCarList(car: { name: string; year: number }) {
    this.cars.push(car);
  }
}
