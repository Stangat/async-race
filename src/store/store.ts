import { getCars } from '../api/cars/getCars';

export async function setLocalStorage() {
  const res = await getCars(1);
  localStorage.setItem('carsInGarage', JSON.stringify(res));
  localStorage.setItem('carsPage', '1');
}

export function getLocalStorage(name: string) {
  const result = localStorage.getItem(name);
  if (result) {
    const data = JSON.parse(result);
    return data;
  }
}
