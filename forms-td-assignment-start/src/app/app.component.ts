import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') submittedForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  submitted = false;
  user = {
    email: '',
    subscription: this.subscriptions[1],
    password: ''
  }

  onSubmit() {
    console.log(this.submittedForm.form.value);
    this.submitted = true;
  }
}
