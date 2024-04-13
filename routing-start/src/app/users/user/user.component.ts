import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userSelectedEmitter.subscribe((userSelected: User) => {
      this.user = userSelected;
    });
    this.user = this.userService.getUser(1);
  }
}
