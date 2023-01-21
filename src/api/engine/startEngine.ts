import { ICarStartStopEngine } from '../interfaces';
import { path } from '../paths';

export async function startEngine(id: number) {
  const response = await fetch(`${path.engine}?id=${id}&status=started`, { method: 'PATCH' });
  const result: ICarStartStopEngine = await response.json();
  return result;
}
