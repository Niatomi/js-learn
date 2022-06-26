import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css'],
})
export class CarAddComponent implements OnInit {
  carName: string = '';

  addCar() {
    this.service.addCar(this.carName);
    this.carName = '';
  }

  constructor(private service: CarsService) {}

  ngOnInit(): void {}
}
