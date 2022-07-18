import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface Car {
  id: number;
  name: string;
  color: string;
}

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}
  baseURL = 'http://localhost:3000/cars';
  getCars(): Observable<any> {
    return this.http.get<Car[]>(this.baseURL);
  }

  addCar(car: Car): Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(car);
    console.log(body);
    return this.http.post<Car>(this.baseURL, body, { headers: headers });
  }

  getCar(id: number): Observable<any> {
    return this.http.get<Car>(this.baseURL + `/${id}`);
  }

  changeColor(car: Car) {
    return this.http.put<Car>(this.baseURL + `/${car.id}`, car);
  }

  deleteCar(id: number) {
    return this.http.delete(this.baseURL + `/${id}`);
  }
}
