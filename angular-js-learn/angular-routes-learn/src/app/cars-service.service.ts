import { Injectable } from '@angular/core';

export interface Car {
  name: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarsServiceService {
  cars: Car[] = [
    {
      name: 'Lada',
      id: 1,
    },
    {
      name: 'UAZ',
      id: 2,
    },
    {
      name: 'Mercedes',
      id: 3,
    },
    {
      name: 'Audi',
      id: 4,
    },
  ];
}
