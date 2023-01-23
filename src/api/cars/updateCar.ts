import { ICarDataCreate, ICarDataGet } from '../interfaces';
import { path } from '../paths';

export async function updateCar(id: number, body: ICarDataCreate) {
  const response = await fetch(`${path.garage}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const item: ICarDataGet = await response.json();
  return item;
}
