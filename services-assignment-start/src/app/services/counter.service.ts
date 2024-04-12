import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  private activeOperations = 0;
  private inactiveOperations = 0;

  increaseActiveOperations() {
    this.activeOperations++;
    console.log(`Active operations: ${this.activeOperations}`);
  }

  increaseInactiveOperations() {
    this.inactiveOperations++;
    console.log(`Inactive operations: ${this.inactiveOperations}`);
  }
}
