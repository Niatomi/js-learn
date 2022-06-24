import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: ` <div class="col-xs-8 col-xs-offset-2"></div> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'WebForMyself';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'foo',
    baz: 'qux',
    nested: {
      xyz: 3,
      number: [1, 2, 3],
    },
  };
}
