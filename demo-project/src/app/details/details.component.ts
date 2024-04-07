import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  details = 'Secret password = tuna';
  displayDetails = false;
  logs = [];
  
  onClickDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    //this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }

  getBackgroundColor(index: number) {
    return index >= 4 ? 'blue': '';
  }

  getTextColor(index: number) {
    return index >= 4;
  }
}
