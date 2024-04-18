import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
  user: User;
  paramsSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.user = this.userService.getUser(+id);
    this.paramsSubscription = this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.user = this.userService.getUser(+id);
    });
    //this.userService.userSelectedEmitter.subscribe((userSelected: User) => {
    //  this.user = userSelected;
    //});
    //this.user = this.userService.getUser(1);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
