import { getCars } from '../api/cars/getCars';
import { IAnimationState } from '../api/interfaces';
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

export async function setWinnersLocalStorage(page: string) {
  const res = await getWinners(+page);
  localStorage.setItem('winners', JSON.stringify(res));
}

export async function setLocalStorage(view: string) {
  let page = localStorage.getItem('carsPage');
  if (!page) {
    page = '1';
  }
  setCarsPageLocalStorage(page);
  await setCarsInGarageLocalStorage(page);
  setViewLocalStorage(view);
}

export function getLocalStorage(name: string) {
  const result = localStorage.getItem(name);
  if (result) {
    const data = JSON.parse(result);
    return data;
  }
}

export const requestIdState: IAnimationState = <IAnimationState>{};
