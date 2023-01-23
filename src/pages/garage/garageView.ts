import { getLocalStorage } from '../../store/store';
import { createCarItem } from '../../components/car/carItem';
import { ICarDataGet } from '../../api/interfaces';

function createGarageControlBlock() {
  const garageControlBlockHtml = `
    <div class="menu">
      <button class="menu__button menu__button_garage" disabled>To garage</button>
      <button class="menu__button menu__button_winners">To winners</button>
    </div>
    <div class="garage-view">
      <div>
        <form class="form form_create">
          <input class="input-text input-text__create" name="car-name" type="text">
          <input class="input-color input-color__create" name="car-color" type="color" value="#ffffff">
          <button class="button form__submit-button_create">Create</button>
        </form>
        <form class="form form_update">
          <input class="input-text input-text__update" name="car-name" type="text" disabled>
          <input class="input-color input-color__update" name="car-color" type="color" value="#ffffff" disabled>
          <button class="button form__submit-button_update" disabled>Update</button>
        </form>
        <div class="race-controls">
          <button class="button race-controls__start-button">Race</button>
          <button class="button race-controls__reset-button" disabled>Reset</button>
          <button class="button generate-button">Generate cars</button>
        </div>
      </div>
    </div>`;
  const garageControlBlock = document.createElement('section');
  garageControlBlock.className = 'control-section';
  garageControlBlock.innerHTML = garageControlBlockHtml;
  document.body.appendChild(garageControlBlock);
}

function renderCarsInGarage() {
  return `
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
}

export function createGarage() {
  const controlSection = document.querySelector('.control-section');
  const garageSection = document.createElement('section');
  garageSection.className = 'garage-section';
  garageSection.innerHTML = renderCarsInGarage();

  if (controlSection) {
    controlSection.after(garageSection);
  }
}

export function removeGarage() {
  const garageSection = document.querySelector('.garage-section');
  if (garageSection) {
    garageSection.remove();
  }
}

export async function renderGarage() {
  createGarageControlBlock();
  createGarage();
}
