import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from '../../models/server';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: Server;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService) { }

  ngOnInit() {
    this.serversService.selectServerEmitter.subscribe((server: Server) => {
      this.server = server;
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
