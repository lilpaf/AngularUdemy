import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId = 10
  serverStatus = "offline"

  getServerStatus() {
    return this.serverStatus;
  }
}
