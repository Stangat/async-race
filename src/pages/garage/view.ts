function createGarageControlBlock() {
  const garageControlBlockHtml = `
    <div class="menu">
      <button class="button menu__button_garage">To garage</button>
      <button class="button menu__button_winners">To winners</button>
    </div>
    <div class="garage-view">
      <div>
        <form class="form form_create">
          <input class="input input__create_name" name="car-name" type="text">
          <input class="input input__create_color" name="car-color" type="color" value="#ffffff">
          <button class="button form__submit-button">Create</button>
        </form>
        <form class="form form_update">
          <input class="input input__update_name" name="car-name" type="text">
          <input class="input input__update_color" name="car-color" type="color" value="#ffffff" disabled>
          <button class="button form__submit-button">Update</button>
        </form>
        <div class="race-controls">
          <button class="button race-controls__start-button">Race</button>
          <button class="button race-controls__reset-button">Reset</button>
          <button class="button race-controls__generate-button">Generate cars</button>
        </div>
      </div>
    </div>`;
  const garageControlBlock = document.createElement('div');
  garageControlBlock.innerHTML = garageControlBlockHtml;
  document.body.appendChild(garageControlBlock);
}

function createGarage() {
  const garageHtml = `
    <h1 class="main-header">Garage()</h1>
    <h2 class="secondary-header">Page#</h2>
    <ul class="garage">
      
    </ul>
    `;
}

export async function createHtml() {
  createGarageControlBlock();
}
