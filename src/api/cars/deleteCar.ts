import { path } from '../paths';

export async function deleteCar(id: number) {
  const response = await fetch(`${path.garage}/${id}`, { method: 'DELETE' });
  const item: Record<string, never> = await response.json();
  return item;
}
