import { createCar } from '../../../api/cars/createCar';
import { ICarDataCreate } from '../../../api/interfaces';
import { updateGarageState } from '../garageState';
import { createGarage, removeGarage } from '../garageView';

export async function createFormListen() {
  const formCreate = document.querySelector('.form_create');
  const inputTextCreate: HTMLInputElement | null = document.querySelector('.input-text__create');
  const inputColorCreate: HTMLInputElement | null = document.querySelector('.input-color__create');

  if (formCreate && inputTextCreate && inputColorCreate) {
    formCreate.addEventListener('submit', async (event: Event) => {
      event.preventDefault();
      const car: ICarDataCreate = { name: inputTextCreate.value, color: inputColorCreate.value };
      await createCar(car);
      await updateGarageState();
      removeGarage();
      createGarage();
      inputTextCreate.value = '';
    });
  }
}
