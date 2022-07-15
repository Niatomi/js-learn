import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') form!: NgForm;

  answers = [
    { type: 'yes', text: 'Да' },
    { type: 'no', text: 'Нет' },
  ];

  defaultAnswer: string = 'yes';
  defaultCountry: string = 'ua';

  submitForm(form: NgForm) {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }

  formData = {};
  isSubmited = false;

  addRandomEmail() {
    const randEmail = 'wfpk@pifam.fef';
    // this.form.setValue({
    //   user: {
    //     email: randEmail,
    //     password: '',
    //   },
    //   country: '',
    //   answer: '',
    // });
    this.form.form.patchValue({
      user: { email: randEmail },
    });
  }
}
