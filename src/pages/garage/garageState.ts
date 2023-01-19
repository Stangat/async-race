import { getLocalStorage, setCarsInGarageLocalStorage } from '../../store/store';

export async function updateGarageState() {
  const carsPage = getLocalStorage('carsPage');
  await setCarsInGarageLocalStorage(carsPage);
  const CARS_PER_PAGE = 7;
  const FIRST_PAGE = 1;
  const count: number = getLocalStorage('carsInGarage').count;
  const nextButton: HTMLButtonElement | null = document.querySelector('.pagination-button_next');
  const prevButton: HTMLButtonElement | null = document.querySelector('.pagination-button_prev');

  if (nextButton && prevButton) {
    if (carsPage * CARS_PER_PAGE < count) {
      nextButton.disabled = false;
    } else {
      nextButton.disabled = true;
    }
    if (carsPage > FIRST_PAGE) {
      prevButton.disabled = false;
    } else {
      prevButton.disabled = true;
    }
  }
}
