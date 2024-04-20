import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Server } from '../../models/server';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): MaybeAsync<Server> {
    const id = route.params['id'];
    return this.serversService.getServer(+id);
  }
}
