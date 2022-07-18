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

  getCars(): Observable<any> {
    return this.http.get<Car[]>('http://localhost:3000/cars');
  }
}
