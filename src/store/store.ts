import { getCars } from '../api/cars/getCars';

export function setCarsPageLocalStorage(page: string) {
  localStorage.setItem('carsPage', page);
}

export async function setCarsInGarageLocalStorage(page: string) {
  const res = await getCars(+page);
  localStorage.setItem('carsInGarage', JSON.stringify(res));
}

export async function setViewLocalStorage(pageName: string) {
  localStorage.setItem('view', pageName);
}

export async function setLocalStorage(page: string, pageName: string) {
  setCarsPageLocalStorage(page);
  await setCarsInGarageLocalStorage(page);
  setViewLocalStorage(pageName);
}

export function getLocalStorage(name: string) {
  const result = localStorage.getItem(name);
  if (result) {
    const data = JSON.parse(result);
    return data;
  }
}
