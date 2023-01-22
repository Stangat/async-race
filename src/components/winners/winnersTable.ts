import { ICarDataGet, IWinnerData, IWinnersData } from '../../api/interfaces';
import { createCarImage } from '../car/carImage';
import { getLocalStorage } from '../../store/store';

type WinnersDataItemsArray = { car: ICarDataGet; id: number; wins: number; time: number }[];

export function renderWinnersTable() {
  const winnersData: WinnersDataItemsArray = getLocalStorage('winners').items;
  const sortType = localStorage.getItem('sortType');
  const sortOrder = localStorage.getItem('sortOrder');
  return `
  <h1 class="main-header">Winners(${getLocalStorage('winners').count})</h1>
  <h2 class="secondary-header">Page#${getLocalStorage('winnersPage')}</h2>
  <table class="table">
      <thead>
        <th>Number</th>
        <th>Car</th>
        <th>Name</th>
        <th class="table-button table-button_wins ${sortType === 'wins' ? sortOrder : ''}" id="sort-by-wins">Wins</th>
        <th class="table-button table-button_time ${sortType === 'time' ? sortOrder : ''}" id="sort-by-time">Best time (seconds)</th>
      </thead>
      <tbody>
        ${winnersData
          .map(
            (winner, index: number) => `
          <tr>
            <td>${index + 1}</td>
            <td class="table-car-image">${createCarImage(winner.car.color)}</td>
            <td>${winner.car.name}</td>
            <td>${winner.wins}</td>
            <td>${winner.time}</td>
          </tr>`
          )
          .join('')}
      </tbody>
    </table>
  `;
}
