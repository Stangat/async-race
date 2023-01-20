import { getCar } from '../../../api/cars/getCar';
import { setCarIdLocalStorage } from '../../../store/store';
import { getCarId } from '../../../utils/getCarId';
let selectedCar = null;

export async function selectButtonListen() {
  const updateInputText: HTMLInputElement | null = document.querySelector('.input-text__update');
  const updateInputColor: HTMLInputElement | null = document.querySelector('.input-color__update');
  const updateSubmitButton: HTMLButtonElement | null = document.querySelector('.form__submit-button_update');

  if (event && updateInputText && updateInputColor && updateSubmitButton) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      if (eventTarget.classList.contains('select-button')) {
        const id: number = getCarId('select-car-');
        setCarIdLocalStorage(id);
        selectedCar = await getCar(id);
        updateInputText.value = selectedCar.name;
        updateInputColor.value = selectedCar.color;
        updateInputText.disabled = false;
        updateInputColor.disabled = false;
        updateSubmitButton.disabled = false;
      }
    }
  }
}
