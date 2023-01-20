import { createFormListen } from './createFormListener';
import { generateCarsButtonListen } from './generateCarsButtonListener';
import { nextButtonListen, prevButtonListen } from './paginationButtonsListener';
import { removeButtonListen } from './removeButtonListener';
import { selectButtonListen } from './selectButtonListener';
import { updateFormListen } from './updateFormListener';

export async function listen() {
  createFormListen();
  updateFormListen();
  nextButtonListen();
  prevButtonListen();
  generateCarsButtonListen();
  document.body.addEventListener('click', removeButtonListen);
  document.body.addEventListener('click', selectButtonListen);
}
