import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  keyframes,
} from '@angular/animations';

export const divTrigger = trigger('divTrigger', [
  // void => *
  transition(':enter', [
    style({
      opacity: 0,
    }),
    animate(500, style({ opacity: 1 })),
  ]),
  // * => void
  transition(':leave', [
    style({
      opacity: 1,
    }),
    animate(500, style({ opacity: 0 })),
  ]),
]);

export const changeWidthTrigger = trigger('changeWidth', [
  transition('* => *', [
    animate(
      1000,
      style({
        height: '10px',
      })
    ),
    animate(
      1000,
      style({
        height: '*',
      })
    ),
  ]),
]);

export const detailedTrigger = trigger('detailedDivivTrigger', [
  // void => *
  transition(':enter', [
    style({
      width: '*',
      height: '*',
    }),
    group([
      animate(
        3000,
        style({
          width: '200px',
          height: '200px',
        })
      ),
      animate(
        6000,
        keyframes([
          style({ backgroundColor: 'yellow' }),
          style({ backgroundColor: 'red' }),
          style({ backgroundColor: 'green' }),
          style({ backgroundColor: 'pink' }),
        ])
      ),
    ]),
    animate(1000),
  ]),
  // * => void
  transition(':leave', [
    style({
      width: '*',
      height: '*',
      backgroundColor: '*',
    }),
    animate(500, style({})),
  ]),
]);
