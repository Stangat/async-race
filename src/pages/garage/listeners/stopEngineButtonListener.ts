import { stopDriving } from "../../../utils/carDriving";
import { getCarId } from "../../../utils/getCarId";

export async function stopEngineButtonListen() {
  if (event) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      if (eventTarget.classList.contains('engine-button_stop')) {
        const id: number = getCarId('stop-engine-car');
        stopDriving(id);
      }
    }
  }
}