import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrl: './username.component.css'
})
export class UsernameComponent {
  username = '';

  disableUserButton() {
    return this.username === '';
  }

  onClickUserButton() {
    this.username = '';
  }
}
