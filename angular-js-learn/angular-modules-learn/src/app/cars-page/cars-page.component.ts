import { Component, OnInit } from '@angular/core';
import { Car, CarsServiceService } from '../cars-service.service';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  styleUrls: ['./cars-page.component.css'],
})
export class CarsPageComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carService: CarsServiceService) {}

  ngOnInit(): void {
    this.cars = this.carService.cars;
  }
}
