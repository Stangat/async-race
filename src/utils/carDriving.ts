import { driveEngine } from '../api/engine/driveEngine';
import { stopEngine } from '../api/engine/stopEngine';
import { carAnimation } from './carAnimation';
import { getDistanceBetweenElements } from './getDistanceBetweenElements';
import { requestIdState } from '../store/store';
import { getTime } from './getTime';

export async function startDriving(id: number) {
  const enableDrivingButton = document.getElementById(`start-engine-car${id}`);
  const disableDrivingButton = document.getElementById(`stop-engine-car${id}`);
  const car = document.getElementById(`car-${id}`);
  const finishFlag = document.getElementById(`finish-flag-${id}`);

  if (
    enableDrivingButton instanceof HTMLButtonElement &&
    disableDrivingButton instanceof HTMLButtonElement &&
    car &&
    finishFlag
  ) {
    enableDrivingButton.disabled = true;
    const time = await getTime(id);
    disableDrivingButton.disabled = false;
    const distanceToFinish = Math.floor(getDistanceBetweenElements(car, finishFlag)) + 40;
    requestIdState[id] = carAnimation(car, distanceToFinish, time);

    const { success } = await driveEngine(id);
    if (!success) {
      window.cancelAnimationFrame(requestIdState[id].requestId);
    }
    const drivingCar = { success, id, time };
    return drivingCar;
  }
  return undefined;
}

export async function stopDriving(id: number) {
  const disableDrivingButton = document.getElementById(`stop-engine-car${id}`);
  const enableDrivingButton = document.getElementById(`start-engine-car${id}`);
  const car = document.getElementById(`car-${id}`);
  const finishFlag = document.getElementById(`finish-flag-${id}`);

  if (
    disableDrivingButton instanceof HTMLButtonElement &&
    enableDrivingButton instanceof HTMLButtonElement &&
    car &&
    finishFlag
  ) {
    await stopEngine(id);
    enableDrivingButton.disabled = false;

    if (requestIdState[id].requestId) {
      window.cancelAnimationFrame(requestIdState[id].requestId);
      car.style.transform = `translateX(0)`;
      disableDrivingButton.disabled = true;
    }
  }
}
