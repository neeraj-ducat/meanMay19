import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // variable to represents form state
  num1: string ="0";
  num2: string ="0";
 // variable to store the result
  result: number = 0;
  // variable to represent the state of radio button
  operation: string = "add";
 // variable to control the display of result
 flag: boolean = true;

  // function handle the click of button.
  calculate() {
    this.flag = false;
    switch(this.operation) {
      case "add": {
        this.result = parseInt(this.num1) + parseInt(this.num2);
        break;
      }
      case "subtract": {
        this.result = parseInt(this.num1) - parseInt(this.num2);
        break;
      }
      case "multiply": {
        this.result = parseInt(this.num1) * parseInt(this.num2);
        break;
      }
      default: {
        this.result = parseInt(this.num1) / parseInt(this.num2);
     
      }
    }
  }
}
