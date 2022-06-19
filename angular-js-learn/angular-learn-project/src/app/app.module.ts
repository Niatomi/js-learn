import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent } from './my/my.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, MyComponent, CarsComponent, CarComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
