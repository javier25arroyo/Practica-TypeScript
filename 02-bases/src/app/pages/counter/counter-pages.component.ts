import { Component } from "@angular/core";


@Component({
  templateUrl: './counter-pages.component.html',

  styles: `
    button {
      margin: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})

export class CounterPagesComponent {
  
  incresaseBy(value: number) {
    this.counter += value;
  }

  reset() {
    this.counter = 0;
  }

  counter = 0;

}