import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from '../../models/server';
import {
  ActivatedRoute,
  GuardResult,
  MaybeAsync,
  Params,
  Router,
} from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: Server;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  canDeactivate(): MaybeAsync<GuardResult> {
    if (!this.allowEdit) {
      return true;
    }
    if (
      !this.changesSaved &&
      (this.serverName !== this.server.name ||
        this.server.status !== this.serverStatus)
    ) {
      return confirm('Do you want to discard the changes!');
    }

    return true;
  }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams['allowEdit']);
    console.log(this.route.snapshot.queryParams);
    //console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((params: Params) => {
      this.allowEdit = params['allowEdit'] === '1';
    });
    // this.serversService.selectServerEmitter.subscribe((server: Server) => {
    //   this.server = server;
    //   this.serverName = this.server.name;
    //   this.serverStatus = this.server.status;
    // });
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route, queryParamsHandling: 'preserve' });
  }
}
