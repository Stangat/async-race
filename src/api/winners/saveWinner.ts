import { path } from '../paths';
import { createWinner } from './createWinner';
import { getWinner } from './getWinner';
import { updateWinner } from './updateWinner';

export async function getStatus(id: number) {
  const response = await fetch(`${path.winners}/${id}`);
  const status = response.status;

  return status;
}

export async function saveWinner(id: number, time: number) {
  const winnerStatus = await getStatus(id);

  if (winnerStatus === 404) {
    await createWinner({
      id: id,
      wins: 1,
      time: time,
    });
  } else {
    const winner = await getWinner(id);
    await updateWinner(id, {
      id: id,
      wins: winner.wins + 1,
      time: time < winner.time ? time : winner.time,
    });
  }
}
