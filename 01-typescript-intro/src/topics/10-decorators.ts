function classDecorator < T extends {new (...args:any[]): {}} >(
  constructor: T
){
  return class extends constructor {
    newProperty: string = 'new property';
    hello: string = 'override';
  }
}


@classDecorator
export class superClaass {
  public myProperty: string = 'Hola Mundo';

  print () {
    console.log('Hello World');
  }
}

console.log(superClaass);

const myClass = new superClaass();
console.log(myClass);