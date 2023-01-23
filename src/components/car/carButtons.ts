export function createCarViewButtons(name: string, id: number) {
  return `
    <div class="car-buttons-container">
      <button class="button select-button" id="select-car-${id}">Select</button>
      <button class="button remove-button" id="remove-car-${id}">Remove</button>
      <span class="car-name">${name}</span>
    </div>`;
}

export function createCarEngineButtons(id: number, isEngineStarted?: boolean) {
  return `
    <div class="engine-control">
      <button class="engine-button engine-button_start" id="start-engine-car${id}" ${
    isEngineStarted ? 'disabled' : ''
  }>A</button>
      <button class="engine-button engine-button_stop" id="stop-engine-car${id}" ${
    !isEngineStarted ? 'disabled' : ''
  }>B</button>
    </div>
    `;
}
