import { IWinnerData } from '../interfaces';
import { path } from '../paths';

export async function updateWinner(id: number, body: IWinnerData) {
  const response = await fetch(`${path.winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const item = await response.json();
  return item;
}
