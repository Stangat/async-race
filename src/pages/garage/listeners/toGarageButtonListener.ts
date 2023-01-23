import { updateGarageState } from '../garageState';

export async function toGarageButtonListen() {
  const toGarageButton: HTMLButtonElement | null = document.querySelector('.menu__button_garage');
  const toWinnersButton: HTMLButtonElement | null = document.querySelector('.menu__button_winners');
  const raceButton: HTMLButtonElement | null = document.querySelector('.race-controls__start-button');

  if (toGarageButton && toWinnersButton && raceButton) {
    toGarageButton.addEventListener('click', async () => {
      toGarageButton.disabled = true;
      toWinnersButton.disabled = false;
      const winnersSection = document.querySelector('.winners-section');
      if (winnersSection) {
        winnersSection.classList.toggle('hidden', true);
      }
      const garageSection = document.querySelector('.garage-section');
      if (garageSection) {
        garageSection.classList.toggle('hidden', false);
      }
      localStorage.setItem('view', 'garage');
      updateGarageState();
    });
  }
}
