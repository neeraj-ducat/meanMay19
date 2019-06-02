import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  value: number = 1;
  constructor() { }

  ngOnInit() {
  }

  double () {
    this.value = this.value * 2;
  }

}
