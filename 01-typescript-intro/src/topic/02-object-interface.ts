interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string;
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
  hometown: undefined
};

strider.hometown = 'BlackHourse';

console.table(strider);

export{};