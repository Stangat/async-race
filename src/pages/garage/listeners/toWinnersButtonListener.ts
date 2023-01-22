import { updateWinnersState } from '../../winners/winnersState';
import { removeWinners, renderWinners } from '../../winners/winnersView';

export async function toWinnersButtonListen() {
  const toWinnersButton: HTMLButtonElement | null = document.querySelector('.menu__button_winners');
  const toGarageButton: HTMLButtonElement | null = document.querySelector('.menu__button_garage');
  const resultMessage = document.querySelector('.result-message');

  if (toWinnersButton && resultMessage && toGarageButton) {
    toWinnersButton.addEventListener('click', async () => {
      toWinnersButton.disabled = true;
      toGarageButton.disabled = false;
      const garageSection = document.querySelector('.garage-section');
      if (garageSection) {
        garageSection.classList.toggle('hidden', true);
      }
      resultMessage.classList.toggle('hidden', true);
      await updateWinnersState();
      removeWinners();
      renderWinners();
      const winnersSection = document.querySelector('.winners-section');
      if (winnersSection) {
        winnersSection.classList.toggle('hidden', false);
      }
      localStorage.setItem('view', 'winners');
    });
  }
}
