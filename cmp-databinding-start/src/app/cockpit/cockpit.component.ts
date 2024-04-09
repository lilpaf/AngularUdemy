import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  newServerName = '';
  newServerContent = '';
 
  onAddServer(nameInput) {
    console.log(nameInput)
    this.serverCreated.emit({
      serverName: this.newServerName, 
      serverContent: this.newServerContent});
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      blueprintName: this.newServerName, 
      blueprintContent: this.newServerContent});
    }
}
