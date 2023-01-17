import { ICarDataCreate } from '../interfaces';
import { path } from '../paths';

export async function createCar(body: ICarDataCreate) {
  const response = await fetch(path.garage, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const item = await response.json();
  return item;
}
