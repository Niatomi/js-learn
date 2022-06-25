import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
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

  addCarToList(carName: string) {
    console.log(123);

    this.cars.push({
      name: carName,
      isSold: false,
    });
  }
}
