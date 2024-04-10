import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput : ElementRef;
 
  onAddServer(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value});
    //this.serverCreated.emit({
    //  serverName: this.newServerName, 
    //  serverContent: this.newServerContent});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    //this.blueprintCreated.emit({
    //  blueprintName: this.newServerName, 
    //  blueprintContent: this.newServerContent});
    this.blueprintCreated.emit({
      blueprintName: nameInput.value, 
      blueprintContent: this.serverContentInput.nativeElement.value});
    }
}
