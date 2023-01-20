import { ICarsInGarageData } from '../interfaces';
import { path } from '../paths';

export async function getCars(page: number, limit = 7) {
  const response = await fetch(`${path.garage}?_page=${page}&_limit=${limit}`);
  const result: ICarsInGarageData = {
    items: await response.json(),
    count: response.headers.get('X-Total-Count'),
  };

  return result;
}
