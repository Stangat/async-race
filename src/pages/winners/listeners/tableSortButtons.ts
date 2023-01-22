import { sortWinnersBy } from '../../../components/winners/winnersSort';
import { updateWinnersState } from '../winnersState';
import { removeWinners, renderWinners } from '../winnersView';

export async function tableWinsButtonListen() {
  if (event) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLElement) {
      if (eventTarget.classList.contains('table-button_wins')) {
        sortWinnersBy('wins');
        await updateWinnersState();
        removeWinners();
        renderWinners();
        const winnersSection = document.querySelector('.winners-section');
        if (winnersSection) {
          winnersSection.classList.toggle('hidden', false);
        }
      }
    }
  }
}

export async function tableTimeButtonListen() {
  if (event) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLElement) {
      if (eventTarget.classList.contains('table-button_time')) {
        sortWinnersBy('time');
        await updateWinnersState();
        removeWinners();
        renderWinners();
        const winnersSection = document.querySelector('.winners-section');
        if (winnersSection) {
          winnersSection.classList.toggle('hidden', false);
        }
      }
    }
  }
}
