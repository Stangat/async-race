import { getLocalStorage, setCarsPageLocalStorage, setWinnersPageLocalStorage } from '../../../store/store';
import { updateWinnersState } from '../../winners/winnersState';
import { removeWinners, renderWinners } from '../../winners/winnersView';
import { updateGarageState } from '../garageState';
import { createGarage, removeGarage } from '../garageView';

export async function nextButtonListen() {
  const nextButton = document.querySelector('.pagination-button_next');

  if (nextButton) {
    nextButton.addEventListener('click', async () => {
      switch (localStorage.getItem('view')) {
        case 'garage': {
          let carsPage: number = getLocalStorage('carsPage');
          carsPage += 1;
          setCarsPageLocalStorage(carsPage.toString());
          const resetButton: HTMLButtonElement | null = document.querySelector('.race-controls__reset-button');
          const raceButton: HTMLButtonElement | null = document.querySelector('.race-controls__start-button');
          if (resetButton && raceButton) {
            resetButton.disabled = true;
            raceButton.disabled = false;
          }
          await updateGarageState();
          removeGarage();
          createGarage();
          break;
        }
        case 'winners': {
          let winnersPage: number = getLocalStorage('winnersPage');
          winnersPage += 1;
          setWinnersPageLocalStorage(winnersPage.toString());
          await updateWinnersState();
          removeWinners();
          renderWinners();
          const winnersSection = document.querySelector('.winners-section');
          if (winnersSection) {
            winnersSection.classList.remove('hidden');
          }
          break;
        }
        default:
        // do nothing
      }
    });
  }
}

export async function prevButtonListen() {
  const prevButton = document.querySelector('.pagination-button_prev');

  if (prevButton) {
    prevButton.addEventListener('click', async () => {
      switch (localStorage.getItem('view')) {
        case 'garage': {
          let carsPage: number = getLocalStorage('carsPage');
          carsPage -= 1;
          setCarsPageLocalStorage(carsPage.toString());
          const resetButton: HTMLButtonElement | null = document.querySelector('.race-controls__reset-button');
          const raceButton: HTMLButtonElement | null = document.querySelector('.race-controls__start-button');
          if (resetButton && raceButton) {
            resetButton.disabled = true;
            raceButton.disabled = false;
          }
          await updateGarageState();
          removeGarage();
          createGarage();
          break;
        }
        case 'winners': {
          let winnersPage: number = getLocalStorage('winnersPage');
          winnersPage -= 1;
          setWinnersPageLocalStorage(winnersPage.toString());
          await updateWinnersState();
          removeWinners();
          renderWinners();
          const winnersSection = document.querySelector('.winners-section');
          if (winnersSection) {
            winnersSection.classList.remove('hidden');
          }
          break;
        }
        default:
        // do nothing
      }
    });
  }
}
