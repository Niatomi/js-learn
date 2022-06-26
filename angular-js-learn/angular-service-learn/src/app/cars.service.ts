import { Injectable } from '@angular/core';
import { ConsoleService } from './console.service';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  cars: { name: string; isSold: boolean }[] = [
    {
      name: 'Ford',
      isSold: false,
    },
    {
      name: 'BMW',
      isSold: true,
    },
    {
      name: 'Land Rover',
      isSold: false,
    },
    {
      name: 'Mazda',
      isSold: false,
    },
  ];

  addCar(carName: string) {
    this.console.log(carName);
    this.cars.push({
      name: carName,
      isSold: false,
    });
  }

  constructor(private console: ConsoleService) {}
}
