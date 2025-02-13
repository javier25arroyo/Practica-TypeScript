function addnumbers(a:number, b:number){
  return a + b;
}

const addNumbersArrow = (a: number, b:number): string => {
  return `${a + b}`;
}


function multiply(firstNumber: number, secondNumber?: number, base: number = 2) {
  return firstNumber * base;
}
/*
const result: number = addnumbers(1, 2);
const result2: string = addNumbersArrow(3, 2);
const multiplyResult: number = multiply(5)

console.log({result, result2, multiplyResult});
*/

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healcharacter = ( character: Character, amount: number) => {
  character.hp += amount;
}

const strider : Character = {
  name: 'Strider',
  hp: 50,
  showHp(){
    console.log(`Hit points ${this.hp}`);
  }
}

healcharacter(strider, 50);

strider.showHp();

export {};

