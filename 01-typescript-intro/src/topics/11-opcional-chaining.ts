export interface Passenger {
  name: string;
  children?: Passenger[];
}

const passenger1: Passenger = {
  name: 'Javier',
}

const passenger2 : Passenger = {
  name: 'Edan',
  children: ['Eda', 'Edan I'],
}

const returnPrintChildren = (passenger: Passenger): number => {

  const howManyChildren = passenger.children?.length || 0;
  // const howManyChildren = passenger.children!.length || 0;

  console.log(passenger.name, howManyChildren);

  return howManyChildren;
}

returnPrintChildren(passenger1);