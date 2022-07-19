import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CarsPageComponent } from './cars-page/cars-page.component';
import { FormsModule } from '@angular/forms';
import { Routes, Router, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'cars', component: CarsPageComponent },
  { path: '', component: HomePageComponent },
];

@NgModule({
  declarations: [AppComponent, HomePageComponent, CarsPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
