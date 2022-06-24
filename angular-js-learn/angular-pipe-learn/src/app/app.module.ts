import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { FilterPipeComponent } from './filter-pipe/filter-pipe.component';
import { CarFilterPipe } from './car-filter.pipe';

@NgModule({
  declarations: [AppComponent, CustomPipePipe, FilterPipeComponent, CarFilterPipe],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
