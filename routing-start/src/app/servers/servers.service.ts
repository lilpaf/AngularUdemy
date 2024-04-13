import { EventEmitter } from '@angular/core';
import { Server } from '../models/server';

export class ServersService {
  selectServerEmitter = new EventEmitter<Server>();

  private servers = [
    new Server(1, 'Productionserver', 'online'),
    new Server(2, 'Testserver', 'offline'),
    new Server(3, 'Devserver', 'offline'),
  ];

  getServers() {
    return this.servers.slice();
  }

  getServer(id: number) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    return server;
  }

  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }

  selectServer(server: Server) {
    this.selectServerEmitter.emit(server);
  }
}
