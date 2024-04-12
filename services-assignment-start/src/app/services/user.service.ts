import { EventEmitter, Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  //activeUserAdded = new EventEmitter();
  //inactiveUserAdded = new EventEmitter();
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private countService: CounterService) {}

  addToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    //this.inactiveUserAdded.emit();
    this.countService.increaseInactiveOperations();
  }

  addToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    //this.activeUserAdded.emit();
    this.countService.increaseActiveOperations();
  }
}
