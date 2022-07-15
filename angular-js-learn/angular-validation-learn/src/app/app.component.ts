import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  answers = [
    { type: 'yes', text: 'Да' },
    { type: 'no', text: 'Нет' },
  ];

  defaultAnswer: string = 'yes';
  defaultCountry: string = 'ua';

  submitForm(form: NgForm) {
    console.log(form);
    form.reset();
  }
}
