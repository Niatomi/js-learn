import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { CarPageComponent } from './car-page/car-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'cars',
    component: CarsPageComponent,
    children: [
      { path: ':id', component: CarPageComponent },
      { path: ':id/:name', component: CarPageComponent },
    ],
    canActivate: [AuthGuardService],
  },
  { path: '', component: HomePageComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
