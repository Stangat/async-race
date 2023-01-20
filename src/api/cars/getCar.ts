import { ICarDataGet } from '../interfaces';
import { path } from '../paths';

export async function getCar(id: number) {
  const response = await fetch(`${path.garage}/${id}`);
  const item: ICarDataGet = await response.json();

  return item;
}
