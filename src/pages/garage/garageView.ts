import { getLocalStorage } from '../../store/store';
import { createCarItem } from '../../components/car/carItem';
import { ICarDataGet } from '../../api/interfaces';

function createGarageControlBlock() {
  const garageControlBlockHtml = `
    <div class="menu">
      <button class="menu__button menu__button_garage">To garage</button>
      <button class="menu__button menu__button_winners">To winners</button>
    </div>
    <div class="garage-view">
      <div>
        <form class="form form_create">
          <input class="input-text input-text__create" name="car-name" type="text">
          <input class="input-color input-color__create" name="car-color" type="color" value="#ffffff">
          <button class="button form__submit-button">Create</button>
        </form>
        <form class="form form_update">
          <input class="input-text input-text__update" name="car-name" type="text">
          <input class="input-color input-color__update" name="car-color" type="color" value="#ffffff" disabled>
          <button class="button form__submit-button">Update</button>
        </form>
        <div class="race-controls">
          <button class="button race-controls__start-button">Race</button>
          <button class="button race-controls__reset-button">Reset</button>
          <button class="button race-controls__generate-button">Generate cars</button>
        </div>
      </div>
    </div>`;
  const garageControlBlock = document.createElement('section');
  garageControlBlock.className = 'control-section';
  garageControlBlock.innerHTML = garageControlBlockHtml;
  document.body.appendChild(garageControlBlock);
}

function createGarage() {
  const garageHtml = `
    <h1 class="main-header">Garage(${getLocalStorage('carsInGarage').count})</h1>
    <h2 class="secondary-header">Page#${getLocalStorage('carsPage')}</h2>
    <ul class="garage">
      ${getLocalStorage('carsInGarage')
        .items.map(
          (item: ICarDataGet) => `
        <li>${createCarItem(item.name, item.color, item.id)}</li>
      `
        )
        .join('')}
    </ul>
    `;
  const garageSection = document.createElement('section');
  garageSection.className = 'garage-section';
  garageSection.innerHTML = garageHtml;
  document.body.appendChild(garageSection);
}

export async function renderGarage() {
  createGarageControlBlock();
  createGarage();
}
