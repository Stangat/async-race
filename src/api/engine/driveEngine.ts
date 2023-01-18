import { path } from '../paths';

export async function driveEngine(id: number) {
  try {
    const response = await fetch(`${path.garage}?id=${id}&status=drive`);
    const result = await response.json();
    return result;
  } catch (err) {
    const result = { success: false };
    return result;
  }
}
