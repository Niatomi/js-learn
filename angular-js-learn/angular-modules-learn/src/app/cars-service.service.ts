import { Injectable } from '@angular/core';

export interface Car {
  name: string;
  id: number;
  year: number;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarsServiceService {
  cars: Car[] = [
    {
      name: 'Lada',
      id: 1,
      year: 2001,
      color: 'red',
    },
    {
      name: 'UAZ',
      id: 2,
      year: 2003,
      color: 'white',
    },
    {
      name: 'Mercedes',
      id: 3,
      year: 2005,
      color: 'blue',
    },
    {
      name: 'Audi',
      id: 4,
      year: 2006,
      color: 'yellow',
    },
  ];

  emptyCar: Car = {
    name: 'Not found',
    id: -1,
    year: -1,
    color: 'Not found',
  };

  getCarById(id: number) {
    var returningCar: Car = this.emptyCar;
    this.cars.forEach((car) => {
      if (car.id === id) returningCar = car;
    });
    return returningCar;
  }

  getCarByName(name: string) {
    var returningCar: Car = this.emptyCar;
    this.cars.forEach((car) => {
      if (car.name === name) returningCar = car;
    });
    return returningCar;
  }
}
