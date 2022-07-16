import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({
    user: new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, this.checkForLength]),
    }),
    country: new FormControl('ua'),
    answer: new FormControl('no'),
  });

  get password() {
    return this.form.get('user.password');
  }

  checkForLength(control: FormControl) {
    if (control.value.length <= 4) {
      return {
        lengthError: true,
      };
    } else {
      return null;
    }
  }

  answers = [
    { type: 'yes', text: 'Да' },
    { type: 'no', text: 'Нет' },
  ];

  onSubmit() {
    console.log(this.form);
  }
}
