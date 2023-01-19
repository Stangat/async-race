import { deleteCar } from '../../../api/cars/deleteCar';
import { updateGarageState } from '../garageState';
import { createGarage, removeGarage } from '../garageView';

export async function removeButtonListen() {
  if (event) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      if (eventTarget.classList.contains('remove-button')) {
        const id: number = +eventTarget.id.split('remove-car-')[1];
        await deleteCar(id);
        await updateGarageState();
        removeGarage();
        createGarage();
      }
    }
  }
}
