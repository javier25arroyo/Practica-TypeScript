

export function whatsMyTypes<T>( argument: T ): T {

  return argument;
}

let amIString = whatsMyTypes <string>('Hello World');
let amINumber = whatsMyTypes <number>(100);
let amIArray = whatsMyTypes <number[]> ([1,2,3,4,5]);

console.log( amIString.split( ' ') );
console.log( amINumber.toFixed( ) );
console.log( amIArray.join('-') );