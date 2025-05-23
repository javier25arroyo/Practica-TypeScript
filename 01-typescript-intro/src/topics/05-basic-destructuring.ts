

interface AudioPayer {
  audioVolume: number;
  songDuration: number;
  songName: string;
  detaills:Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPayer = {
  audioVolume: 90,
  songDuration: 36,
  songName: "Battle Cry",
  detaills: {
    author: 'Imagine Dragons',
    year: 2014
  }
}

const {songName:anotherSong} = audioPlayer;
const {detaills:{author}} = audioPlayer;

//console.log('Song: ', anotherSong); // 90
//console.log('Author: ', author); // 90

//const DBZ: string[] = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3]: string[] = ['Goku', 'Vegeta', 'Trunks'];

//const [p1, p2, trunks] = DBZ;



console.error('Person : ', p2 );
//console.error('Person 3: ', trunks || 'Uncaught');




export {};