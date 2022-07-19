import { Component, OnInit } from '@angular/core';
import { Car, CarsService } from './config/cars.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  colors = ['red', 'green', 'blue', 'pink', 'yellow', 'grey'];

  addCarName = '';
  addCarColor: string = '';

  serverError = '';

  constructor(private carService: CarsService) {}

  appTitle: string = '';
  ngOnInit(): void {
    this.carService
      .getAppTitle()
      .subscribe((title) => (this.appTitle = title.value));
  }

  cars: Car[] = [];

  setNewColor(car: Car) {
    car.color = this.getRandomColor();
    this.carService.changeColor(car).subscribe(() => {});
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe(() => {
      this.getCars();
    });
  }

  getCars() {
    this.carService.getCars().subscribe({
      next: (cars: Car[]) => (this.cars = cars),
      error: (error) => {
        this.serverError = error.message;
        console.log(this.serverError);
      },
    });
  }

  submitCar() {
    this.carService
      .addCar({
        id: 0,
        name: this.addCarName,
        color: this.addCarColor,
      })
      .subscribe({
        next: (car) => this.cars.push(car),
        error: (error) => {
          alert(error);
        },
      });
  }
}
