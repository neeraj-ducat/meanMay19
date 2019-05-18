import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Application';
  user = 'Neeraj';
  counter = 0;
  increment()
  {
   this.counter++;
   console.log(`Button is clicked ${this.counter} times.` );
  }
}
