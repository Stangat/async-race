import { path } from '../paths';

export async function getCar(id: number) {
  const response = await fetch(`${path.garage}/${id}`);
  const item = await response.json();

  return item;
}
