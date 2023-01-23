import { renderWinnersTable } from '../../components/winners/winnersTable';

export async function renderWinners() {
  const garageSection = document.querySelector('.garage-section');
  if (garageSection) {
    const winnersSection = document.createElement('section');
    winnersSection.className = 'winners-section hidden';
    winnersSection.innerHTML = renderWinnersTable();
    garageSection.after(winnersSection);
  }
}

export function removeWinners() {
  const winnersSection = document.querySelector('.winners-section');
  if (winnersSection) {
    winnersSection.remove();
  }
}
