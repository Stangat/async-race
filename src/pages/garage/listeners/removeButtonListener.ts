import { deleteCar } from '../../../api/cars/deleteCar';
import { deleteWinner } from '../../../api/winners/deleteWinner';
import { getCarId } from '../../../utils/getCarId';
import { updateGarageState } from '../garageState';
import { createGarage, removeGarage } from '../garageView';

export async function removeButtonListen() {
  if (window.event) {
    const eventTarget = window.event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      if (eventTarget.classList.contains('remove-button')) {
        const id: number = getCarId('remove-car-');
        await deleteCar(id);
        await deleteWinner(id);
        await updateGarageState();
        removeGarage();
        createGarage();
      }
    }
  }
}
