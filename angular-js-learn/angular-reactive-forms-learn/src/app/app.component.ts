import { Component, ViewChild } from '@angular/core';
import {
  AsyncValidatorFn,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormGroup({
    user: new FormGroup({
      email: new FormControl(
        '',
        [Validators.email, Validators.required],
        [<AsyncValidatorFn>this.checkForEmail]
      ),
      password: new FormControl('', [
        Validators.required,
        this.checkForLength.bind(this),
      ]),
    }),
    country: new FormControl('ua'),
    answer: new FormControl('no'),
  });

  get password() {
    return this.form.get('user.password');
  }

  get email() {
    return this.form.get('user.email');
  }

  charsCount: number = 5;

  checkForLength(control: FormControl) {
    if (control.value.length <= this.charsCount) {
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

  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@mail.ru') {
          resolve({
            emailIsUsed: true,
          });
        } else {
          resolve(null);
        }
      }, 3000);
    });
  }
}
