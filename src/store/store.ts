import { getCars } from '../api/cars/getCars';
import { IStoreAnimationState } from '../api/interfaces';
import { getWinners } from '../api/winners/getWinners';

export function setCarsPageLocalStorage(page: string) {
  localStorage.setItem('carsPage', page);
}

export async function setCarsInGarageLocalStorage(page: string) {
  const res = await getCars(+page);
  localStorage.setItem('carsInGarage', JSON.stringify(res));
}

export function setViewLocalStorage(pageName: string) {
  localStorage.setItem('view', pageName);
}

export function setCarIdLocalStorage(id: number) {
  localStorage.setItem('carId', id.toString());
}

export async function setWinnersLocalStorage(page: string, sort?: string, order?: string) {
  const res = await getWinners(+page, 10, sort, order);
  localStorage.setItem('winners', JSON.stringify(res));
}

export function setWinnersPageLocalStorage(page: string) {
  localStorage.setItem('winnersPage', page);
}

export async function setLocalStorage(view: string) {
  let carsPage = localStorage.getItem('carsPage');
  let winnersPage = localStorage.getItem('winnersPage');
  if (!carsPage) {
    carsPage = '1';
  }
  if (!winnersPage) {
    winnersPage = '1';
  }
  setCarsPageLocalStorage(carsPage);
  setWinnersPageLocalStorage(winnersPage);
  await setCarsInGarageLocalStorage(carsPage);
  await setWinnersLocalStorage(winnersPage);
  setViewLocalStorage(view);
  localStorage.setItem('sortOrder', 'asc');
  localStorage.setItem('sortType', 'wins');
}

export function getLocalStorage(name: string) {
  const result = localStorage.getItem(name);
  if (result) {
    const data = JSON.parse(result);
    return data;
  }
}

export const requestIdState: IStoreAnimationState = <IStoreAnimationState>{};
