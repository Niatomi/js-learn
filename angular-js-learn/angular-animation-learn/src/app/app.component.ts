import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { timeout } from 'rxjs';
import { changeWidthTrigger, divTrigger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedDiv', [
      state(
        'start',
        style({
          backgroundColor: 'blue',
          width: '150px',
          height: '150px',
        })
      ),
      state(
        'end',
        style({
          backgroundColor: 'red',
          width: '300px',
          height: '300px',
        })
      ),
      state(
        'active',
        style({
          width: '170px',
          height: '170px',
          backgroundColor: 'yellow',
        })
      ),

      transition('start <=> end', animate(300)),
      transition('start => active', animate(300)),
      transition('active => end', animate(400)),
    ]),
    trigger('multi', [
      state(
        'start',
        style({ width: '150px', height: '150px', border: '5px solid white' })
      ),
      state(
        'end',
        style({ width: '170px', height: '170px', backgroundColor: 'blue' })
      ),
      transition('start <=> end', [
        style({ backgroundColor: 'red' }),
        animate(1500, style({ backgroundColor: 'yellow' })),
        animate(1000, style({ width: '200px', height: '200px' })),
        animate(1000),
      ]),
    ]),
    divTrigger,
    changeWidthTrigger,
  ],
})
export class AppComponent {
  isVisible: boolean = false;

  clickedDivState: string = 'start';
  multiState: string = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000);
  }
}
