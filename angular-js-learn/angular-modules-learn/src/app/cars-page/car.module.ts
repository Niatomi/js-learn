import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { CarsServiceService } from '../cars-service.service';
import { SharedModule } from '../shared/shared.module';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page.component';
import { CarsRoutingModule } from './cars-routing.module';

@NgModule({
  declarations: [CarsPageComponent, CarPageComponent],
  imports: [CommonModule, CarsRoutingModule, SharedModule],
  providers: [CarsServiceService],
})
export class CarsModule {}
