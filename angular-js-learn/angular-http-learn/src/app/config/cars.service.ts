import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Car {
  id: number;
  name: string;
  color: string;
}

export interface Title {
  value: string;
}

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {}
  baseURL = 'http://localhost:3000';

  getCars(): Observable<any> {
    return this.http
      .get<Car[]>(this.baseURL.concat('/cars'))
      .pipe(catchError(this.handleError));
  }

  getAppTitle(): Observable<Title> {
    return this.http.get<Title>(this.baseURL.concat('/title'));
  }

  addCar(car: Car): Observable<any> {
    const headers = new HttpHeaders().set(
      'content-type',
      'application/json; charset=utf-8'
    );

    return this.http
      .post<Car>(this.baseURL.concat('/cars'), car, { headers })
      .pipe(catchError(this.handleError));
  }

  getCar(id: number): Observable<any> {
    return this.http.get<Car>(this.baseURL.concat('/cars') + `/${id}`);
  }

  changeColor(car: Car) {
    return this.http.put<Car>(this.baseURL.concat('/cars') + `/${car.id}`, car);
  }

  deleteCar(id: number) {
    return this.http.delete(this.baseURL.concat('/cars') + `/${id}`);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Сервер не доступен. Попробуйте позже.'));
  }
}
