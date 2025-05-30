import { Component } from "@angular/core";


@Component({
  template:`
    <h1>Counter:{{ counter}} </h1>
    <!-- El valor de 4 incrementa el contador -->
    <button (click)="incresaBy(1)" >+ 1 </button> 
    `,
})
export class CounterPagesComponent {

  counter = 0;

  incresaBy(value: number) {
    this.counter += value;
  }

}