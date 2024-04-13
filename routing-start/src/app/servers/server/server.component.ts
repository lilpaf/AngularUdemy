import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from '../../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: { id: number; name: string; status: string };

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.serversService.selectServerEmitter.subscribe((server: Server) => {
      this.server = server;
    });
    this.server = this.serversService.getServer(1);
  }
}
