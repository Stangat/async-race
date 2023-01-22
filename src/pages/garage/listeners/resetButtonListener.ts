import { ICarDataGet } from '../../../api/interfaces';
import { getLocalStorage } from '../../../store/store';
import { stopDriving } from '../../../utils/carDriving';
import { updateGarageState } from '../garageState';

export async function resetButtonListen() {
  const raceButton: HTMLButtonElement | null = document.querySelector('.race-controls__start-button');
  const resultMessage = document.querySelector('.result-message');
  const resetButton: HTMLButtonElement | null = document.querySelector('.race-controls__reset-button');
  if (raceButton && resultMessage && resetButton) {
    resetButton.addEventListener('click', async () => {
      resetButton.disabled = true;
      const carsInGarage: ICarDataGet[] = getLocalStorage('carsInGarage').items;
      carsInGarage.map(async (item) => await stopDriving(item.id));
      resultMessage.classList.toggle('hidden', true);
      raceButton.disabled = false;
      await updateGarageState();
    });
  }
}
