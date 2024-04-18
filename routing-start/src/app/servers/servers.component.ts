import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Server } from '../models/server';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public servers: Server[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onServerSelected(server: Server) {
    this.serversService.selectServer(server);
  }

  onReload() {
    this.router.navigate(['servers'], { relativeTo: this.route });
  }
}
