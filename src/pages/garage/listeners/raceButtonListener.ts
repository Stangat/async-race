import { saveWinner } from '../../../api/winners/saveWinner';
import { startDriving } from '../../../utils/carDriving';
import { startRace } from '../../../utils/startRace';

export async function raceButtonListen() {
  const raceButton: HTMLButtonElement | null = document.querySelector('.race-controls__start-button');
  const resultMessage = document.querySelector('.result-message');
  const resetButton: HTMLButtonElement | null = document.querySelector('.race-controls__reset-button');
  if (raceButton && resultMessage && resetButton) {
    raceButton.addEventListener('click', async () => {
      raceButton.disabled = true;
      const raceWinner = await startRace(startDriving);
      await saveWinner(raceWinner.id, raceWinner.time);
      resultMessage.textContent = `${raceWinner.name} went first in ${raceWinner.time}sec`;
      resultMessage.classList.toggle('hidden', false);
      resetButton.disabled = false;
    });
  }
}
