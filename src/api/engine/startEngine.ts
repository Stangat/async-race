import { path } from '../paths';

export async function startEngine(id: number) {
  const response = await fetch(`${path.garage}?id=${id}&status=started`);
  const result = await response.json();
  return result;
}
