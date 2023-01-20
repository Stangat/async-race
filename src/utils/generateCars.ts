import { ICarDataCreate } from '../api/interfaces';

const carBrands = [
  'Plymouth',
  'Pontiac',
  'Dodge',
  'Chevrolet',
  'Ford',
  'Pontiac',
  'GAZ-13',
  'GAZ-21',
  'GAZ-M20',
  'Buick',
];
const carModels = [
  'Roadrunner Superbird',
  'GTO',
  'Charger',
  'Chevelle SS',
  'Mustang Fastback',
  'Firebird Trans Ams',
  'Chaika',
  'Volga',
  'Pobeda',
  'GNX',
];

function getRandomCarName() {
  const randomNumber = Math.floor(Math.random() * carBrands.length);
  const randomCarBrand = carBrands[randomNumber];
  const randomCarModel = carModels[randomNumber];
  const randomCarName = `${randomCarBrand} ${randomCarModel}`;
  return randomCarName;
}

function getRandomCarColor() {
  const NUMBER_OF_CHARACTERS = 6;
  const CHARACTERS = '0123456789ABCDEF';
  let carColor = '#';
  for (let i = 0; i < NUMBER_OF_CHARACTERS; i += 1) {
    const randomNumber = Math.floor(Math.random() * CHARACTERS.length);
    carColor += CHARACTERS[randomNumber];
  }
  return carColor;
}

export function generateCars(numberOfCars = 100) {
  const carsData: ICarDataCreate[] = [];
  for (let i = 0; i < numberOfCars; i += 1) {
    const car = { name: getRandomCarName(), color: getRandomCarColor() };
    carsData.push(car);
  }
  return carsData;
}
