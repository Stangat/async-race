import { updateCar } from '../../../api/cars/updateCar';
import { ICarDataCreate } from '../../../api/interfaces';
import { getLocalStorage } from '../../../store/store';
import { updateGarageState } from '../garageState';
import { createGarage, removeGarage } from '../garageView';

export async function updateFormListen() {
  const formUpdate = document.querySelector('.form_update');
  const inputTextUpdate: HTMLInputElement | null = document.querySelector('.input-text__update');
  const inputColorUpdate: HTMLInputElement | null = document.querySelector('.input-color__update');
  const updateSubmitButton: HTMLButtonElement | null = document.querySelector('.form__submit-button_update');

  if (formUpdate && inputTextUpdate && inputColorUpdate && updateSubmitButton) {
    formUpdate.addEventListener('submit', async (event: Event) => {
      event.preventDefault();
      const car: ICarDataCreate = { name: inputTextUpdate.value, color: inputColorUpdate.value };
      const id: number = getLocalStorage('carId');
      await updateCar(id, car);
      await updateGarageState();
      removeGarage();
      createGarage();
      inputTextUpdate.value = '';
      inputColorUpdate.value = '#ffffff';
      inputTextUpdate.disabled = true;
      inputColorUpdate.disabled = true;
      updateSubmitButton.disabled = true;
    });
  }
}
