import { ICarDriveEngine } from '../interfaces';
import { path } from '../paths';

export async function driveEngine(id: number) {
  try {
    const response = await fetch(`${path.engine}?id=${id}&status=drive`, {method: 'PATCH'});
    const result: ICarDriveEngine = await response.json();
    return result;
  } catch (err) {
    const result = { success: false };
    return result;
  }
}
