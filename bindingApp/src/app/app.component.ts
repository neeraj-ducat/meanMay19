import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // properties to receive form input values
  num1: string;
  num2: string;

  // property to store the result
  result: number;

  // property to control the display of result div
  flag: boolean = true;

  // Method to calculate the sum
  addition() {
   this.result = parseInt(this.num1) + parseInt(this.num2);
   this.flag = false;
  }
}
