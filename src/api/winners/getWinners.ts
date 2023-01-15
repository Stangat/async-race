import { getCar } from '../cars/getCar';
import { IWinnerData } from '../interfaces';
import { path } from '../paths';

function getSortOrder(sort?: string, order?: string) {
  if (sort && order) {
    return `&_sort=${sort}&_order=${order}`;
  }
  return '';
}

export async function getWinners(page: number, limit = 10, sort?: string, order?: string) {
  const response = await fetch(`${path.winners}?_page=${page}&_limit=${limit}${getSortOrder(sort, order)}`);
  const items = await response.json();

  return {
    items: await Promise.all(
      items.map(async (item: IWinnerData) => {
        return { ...item, car: await getCar(item.id) };
      })
    ),
    count: response.headers.get('X-Total-Count'),
  };
}
