import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent {
  carName = 'Car name';
  carYear: number = 1999;

  getName() {
    return this.carName;
  }
}
