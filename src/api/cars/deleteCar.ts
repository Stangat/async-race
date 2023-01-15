import { path } from '../paths';

export async function deleteCar(id: number) {
  const response = await fetch(`${path.garage}/${id}`, { method: 'DELETE' });
  const item = await response.json();
  return item;
}
