import { Component } from '@angular/core';
import { User } from './user.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: User;

  constructor() {
    this.user = new User();
  }
  processForm(frm: FormGroup) {
    // if the form is invalid, programmatically 
    // mark the input elements as touched
    for( let index in frm.controls)
              frm.controls[index].markAsTouched();
    console.log('User: ',this.user);
  }
}
