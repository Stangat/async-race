import { ICarStartStopEngine } from '../interfaces';
import { path } from '../paths';

export async function stopEngine(id: number) {
  const response = await fetch(`${path.engine}?id=${id}&status=stopped`, { method: 'PATCH' });
  const result: ICarStartStopEngine = await response.json();
  return result;
}
