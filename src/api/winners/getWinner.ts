import { path } from '../paths';

export async function getWinner(id: number) {
  const response = await fetch(`${path.winners}/${id}`);
  const item = await response.json();

  return item;
}