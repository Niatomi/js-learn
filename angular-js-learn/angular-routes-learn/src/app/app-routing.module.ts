import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: 'cars/:id', component: CarPageComponent },
  { path: 'cars/:id/:name', component: CarPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
