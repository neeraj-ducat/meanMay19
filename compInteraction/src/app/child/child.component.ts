import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() message: string;
  @Output() whichButton = new EventEmitter<string>();
  constructor() {
      }

  ngOnInit() {
  }
  btnClicked(btn:string) {
    this.whichButton.emit(btn+" is clicked.");
  }
}
