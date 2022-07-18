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
  colors = ['red', 'green', 'blue', 'pink', 'yellow', 'grey'];

  addCarName = '';
  addCarColor: string = '';

  constructor(private carSerive: CarsService) {}

  ngOnInit(): void {
    // this.carSerive.getCars().subscribe((cars) => (this.cars = cars));
  }

  cars: Car[] = [];

  setNewColor(id: number) {
    this.cars[id - 1].color = this.getRandomColor();
    this.carSerive.changeColor(this.cars[id - 1]).subscribe(() => {});
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  deleteCar(id: number) {
    this.carSerive.deleteCar(id).subscribe(() => {
      this.getCars();
    });
  }

  getCars() {
    this.carSerive.getCars().subscribe((cars: Car[]) => (this.cars = cars));
  }

  submitCar() {
    this.carSerive
      .addCar({
        id: 0,
        name: this.addCarName,
        color: this.addCarColor,
      })
      .subscribe((car) => {
        this.cars.push(car);
      });
  }
}
