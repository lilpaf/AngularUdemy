import { Component } from '@angular/core';
import { Server } from './server.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  servers = [
    new Server('medium', 'Production Server', 'stable', new Date(15, 1, 2017)),
    new Server('large', 'User Database', 'stable', new Date(15, 1, 2017)),
    new Server('small', 'Development Server', 'offline', new Date(15, 1, 2017)),
    new Server(
      'small',
      'Testing Environment Server',
      'stable',
      new Date(15, 1, 2017)
    ),
  ];

  filteredStatus = '';

  getStatusClasses(server: Server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }

  onAddServer() {
    this.servers.push(
      new Server(
        'small',
        'New Server',
        'stable',
        new Date()
      )
    );
  }
}
