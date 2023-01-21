import { IWinnerData } from '../interfaces';
import { path } from '../paths';

export async function createWinner(body: IWinnerData) {
  try {
    const response = await fetch(path.winners, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const item: IWinnerData = await response.json();
    return item;
  } catch (err) {
    console.log(err);
  }
}
