import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent {
  canAddCar = false;
  constructor() {
    setTimeout(() => {
      this.canAddCar = !this.canAddCar;
    }, 4000);
  }
}
