import { createFormListen } from './createFormListener';
import { nextButtonListen, prevButtonListen } from './paginationButtonsListener';
import { removeButtonListen } from './removeButtonListener';

export async function listen() {
  createFormListen();
  nextButtonListen();
  prevButtonListen();
  document.body.addEventListener('click', removeButtonListen)
}
