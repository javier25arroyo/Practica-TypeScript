
const skills : string [] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name : string,
  age : number,
  skills : string[],
  hometowm?: string, //hometowm is optional property
  // ? significa que esta propiedad es opcional, puede o no estar presente en el objeto
}


const strider: Character = {
  name: 'Strider',
  age: 30,
  skills: ['Bash', 'Counter', 'Healing'],
}

strider.hometowm = 'Rivendell'; //hometowm is optional property
console.table(strider);



 export{};