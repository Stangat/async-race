import './style.scss';
import { renderGarage } from './pages/garage/garageView';
import { setLocalStorage, getLocalStorage } from './store/store';
import { renderResultMessage } from './components/resultMessage/resultMessage';
import { renderWinners } from './pages/winners/winnersView';
import { renderPagination } from './components/pagination/pagination';

setLocalStorage();
renderGarage();
renderResultMessage();
renderWinners();
renderPagination();
