import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from './config/cars.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private carSerive: CarsService) {}

  ngOnInit(): void {
    // this.carSerive.getCars().subscribe((cars) => (this.cars = cars));
  }

  cars: Car[] = [];

  getCars() {
    this.carSerive.getCars().subscribe((cars: Car[]) => (this.cars = cars));
  }
}
