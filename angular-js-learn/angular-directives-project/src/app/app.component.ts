import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  headerText = 'Создание своей директивы';

  items = [1, 2, 3, 4, 5, 6];

  currentValue = 1;

  onClick(item: number) {
    this.currentValue = item;
  }
}
