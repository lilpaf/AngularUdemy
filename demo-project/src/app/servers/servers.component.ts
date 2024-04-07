import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(){
  }
  
  onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onCUpdateServer(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
