import { getLocalStorage, setCarsInGarageLocalStorage, setWinnersLocalStorage } from '../../store/store';

export async function updateWinnersState() {
  const winnersPage = getLocalStorage('winnersPage');
  const sortType = localStorage.getItem('sortType');
  const sortOrder = localStorage.getItem('sortOrder');
  if (sortType && sortOrder) {
    await setWinnersLocalStorage(winnersPage, sortType, sortOrder);
    const WINNERS_PER_PAGE = 10;
    const FIRST_PAGE = 1;
    const count: number = getLocalStorage('winners').count;
    const nextButton: HTMLButtonElement | null = document.querySelector('.pagination-button_next');
    const prevButton: HTMLButtonElement | null = document.querySelector('.pagination-button_prev');

    if (nextButton && prevButton) {
      if (winnersPage * WINNERS_PER_PAGE < count) {
        nextButton.disabled = false;
      } else {
        nextButton.disabled = true;
      }
      if (winnersPage > FIRST_PAGE) {
        prevButton.disabled = false;
      } else {
        prevButton.disabled = true;
      }
    }
  }
}
