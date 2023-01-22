import { tableTimeButtonListen, tableWinsButtonListen } from '../../winners/listeners/tableSortButtons';
import { createFormListen } from './createFormListener';
import { generateCarsButtonListen } from './generateCarsButtonListener';
import { nextButtonListen, prevButtonListen } from './paginationButtonsListener';
import { raceButtonListen } from './raceButtonListener';
import { removeButtonListen } from './removeButtonListener';
import { resetButtonListen } from './resetButtonListener';
import { selectButtonListen } from './selectButtonListener';
import { startEngineButtonListen } from './startEngineButtonListener';
import { stopEngineButtonListen } from './stopEngineButtonListener';
import { toGarageButtonListen } from './toGarageButtonListener';
import { toWinnersButtonListen } from './toWinnersButtonListener';
import { updateFormListen } from './updateFormListener';

export async function listen() {
  createFormListen();
  updateFormListen();
  nextButtonListen();
  prevButtonListen();
  generateCarsButtonListen();
  raceButtonListen();
  resetButtonListen();
  toWinnersButtonListen();
  toGarageButtonListen();
  document.body.addEventListener('click', () => {
    removeButtonListen();
    selectButtonListen();
    startEngineButtonListen();
    stopEngineButtonListen();
    tableWinsButtonListen();
    tableTimeButtonListen();
  });
}
