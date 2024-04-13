import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userSelectedEmitter = new EventEmitter<User>();

  private users: User[] = [
    new User(1, 'Max'),
    new User(2, 'Anna'),
    new User(3, 'Chris'),
  ];

  getUsers() {
    return this.users.slice();
  }

  getUser(id: number) {
    const user = this.users.find((u) => {
      return u.id === id;
    });
    return user;
  }

  selectUser(user: User) {
    this.userSelectedEmitter.emit(user);
  }
}
