import { createCar } from '../../../api/cars/createCar';
import { getCars } from '../../../api/cars/getCars';
import { generateCars } from '../../../utils/generateCars';
import { updateGarageState } from '../garageState';
import { createGarage, removeGarage } from '../garageView';

export async function generateCarsButtonListen() {
  const generateCarsButton: HTMLButtonElement | null = document.querySelector('.generate-button');
  if (generateCarsButton) {
    generateCarsButton.addEventListener('click', async () => {
      generateCarsButton.disabled = true;
      const cars = generateCars();
      cars.forEach(async (car) => await createCar(car));
      await updateGarageState();
      removeGarage();
      createGarage();
      generateCarsButton.disabled = false;
    });
  }
}
