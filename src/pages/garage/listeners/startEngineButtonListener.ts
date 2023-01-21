import { startDriving } from '../../../utils/carDriving';
import { getCarId } from '../../../utils/getCarId';

export async function startEngineButtonListen() {
  if (event) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      if (eventTarget.classList.contains('engine-button_start')) {
        const id: number = getCarId('start-engine-car');
        startDriving(id);
      }
    }
  }
}
