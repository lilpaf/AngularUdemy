import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Server } from '../../models/server';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server: Server;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.server = data['server'];
    });
    // console.log(this.route.snapshot.queryParams['allowEdit']);
    // const id = this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(+id);

    // this.route.params.subscribe((params: Params) => {
    //   const id = params['id'];
    //   this.server = this.serversService.getServer(+id);
    // });

    //this.serversService.selectServerEmitter.subscribe((server: Server) => {
    //  this.server = server;
    //});
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      queryParamsHandling: 'preserve',
    });
  }
}
