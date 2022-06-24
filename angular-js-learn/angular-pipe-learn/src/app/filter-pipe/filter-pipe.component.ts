import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipe',
  template: ` <input type="text" class="form-control" [(ngModel)]="searchCar" />
    <hr />
    <ul class="list-group">
      <li
        class="list-group-item"
        *ngFor="
          let car of cars | carFilter: searchCar:'desc';
          let index = index
        "
      >
        <b>{{ index + 1 }}</b> {{ car.name }}
        <i> {{ car.desc }}</i>
      </li>
    </ul>`,
  styleUrls: ['./filter-pipe.component.css'],
})
export class FilterPipeComponent implements OnInit {
  searchCar: string = '';

  cars: { name: string; desc: string }[] = [
    { name: 'Ford', desc: 'Aboba' },
    { name: 'UAZ', desc: 'Abiba' },
    { name: 'Bentley', desc: 'Abomba' },
    { name: 'BMW', desc: 'Abobus' },
    { name: 'Lamborgini', desc: 'A' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
