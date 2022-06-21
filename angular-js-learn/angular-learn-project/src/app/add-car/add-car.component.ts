import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent {
  carName = '';
  carYear = 2000;
  addCarStatus = false;

  @Output()
  onAddCar = new EventEmitter<{ name: string; year: number }>();

  @ViewChild('carYearInput')
  carYearInput: any;

  addCar(carNameElement: HTMLInputElement) {
    this.onAddCar.emit({
      name: carNameElement.value,
      year: this.carYearInput.nativeElement.value,
    });
    carNameElement.value = '';
    this.carYearInput.nativeElement.value = 2000;

    setTimeout(() => {
      this.addCarStatus = false;
    }, 1000);
  }

  constructor() {}
}
