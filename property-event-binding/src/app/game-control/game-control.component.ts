import { EventEmitter, Output } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output() countIncremented = new EventEmitter<number>();
  count = 1;
  private ref : NodeJS.Timeout;

  incrementCount() {
    this.count++;
    this.countIncremented.emit(this.count);
  }

  onGameStart() {
    this.ref = setInterval(() => {this.incrementCount()}, 1000);
  }

  onGameStop() {
    clearInterval(this.ref);
  }
}
