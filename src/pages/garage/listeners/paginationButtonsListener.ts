import { getLocalStorage, setCarsPageLocalStorage } from '../../../store/store';
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
          await updateGarageState();
          removeGarage();
          createGarage();
          break;
        }
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
          await updateGarageState();
          removeGarage();
          createGarage();
          break;
        }
      }
    });
  }
}
