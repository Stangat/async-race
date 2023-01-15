import { path } from '../paths';

export async function stopEngine(id: number) {
  const response = await fetch(`${path.garage}?id=${id}&status=stopped`);
  const result = await response.json();
  return result;
}