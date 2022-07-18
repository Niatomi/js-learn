import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
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
    const headers = new HttpHeaders().set(
      'content-type',
      'application/json; charset=utf-8'
    );

    return this.http.post<Car>(this.baseURL, car, { headers });
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
