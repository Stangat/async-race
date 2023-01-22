import { path } from '../paths';

export async function deleteWinner(id: number) {
  const response = await fetch(`${path.winners}/${id}`, { method: 'DELETE' });
  const item: Record<string, never> = await response.json();
  return item;
}
