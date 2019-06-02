import { Component, ViewChild } from '@angular/core';
import { ChildTwoComponent } from './child-two/child-two.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 msg: string = '';
 childMsg :string ='';

 @ViewChild("two")
 childTwo: ChildTwoComponent;
 receiver(result: string)
 {
  this.childMsg = result;
 }
 doubleChildValue() {
   this.childTwo.double();
 }
 resetChildValue() {
  this.childTwo.value = 1;
}
}
