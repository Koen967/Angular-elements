import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CounterComponent implements OnInit {
  @Input() counter = 0;

  constructor() {}

  ngOnInit() {}

  addToCounter() {
    this.counter++;
  }

  subtractFromCounter() {
    this.counter--;
  }
}
