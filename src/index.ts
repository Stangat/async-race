import './style.scss';
import { renderGarage } from './pages/garage/garageView';
import { setLocalStorage } from './store/store';
import { renderResultMessage } from './components/resultMessage/resultMessage';
import { renderWinners } from './pages/winners/winnersView';
import { renderPagination } from './components/pagination/pagination';
import { updateGarageState } from './pages/garage/garageState';
import { listen } from './pages/garage/listeners/totalListener';

async function setUpApp() {
  await setLocalStorage('garage');
  renderGarage();
  renderResultMessage();
  renderWinners();
  renderPagination();
  updateGarageState();
  listen();
}

setUpApp();
