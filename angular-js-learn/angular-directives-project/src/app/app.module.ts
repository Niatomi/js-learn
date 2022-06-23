import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { backgroundDirective } from './directives/background.directive';
import { hoverDirective } from './directives/hover.dircetive';

@NgModule({
  declarations: [AppComponent, backgroundDirective, hoverDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
