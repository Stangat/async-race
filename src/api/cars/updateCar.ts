import { ICarData } from '../interfaces';
import { path } from '../paths';

export async function updateCar(id: number, body: ICarData) {
  const response = await fetch(`${path.garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const item = await response.json();
  return item;
}
