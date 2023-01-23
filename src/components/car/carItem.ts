import { createCarEngineButtons, createCarViewButtons } from './carButtons';
import { createCarView } from './carView';

export function createCarItem(name: string, color: string, id: number, isEngineStarted?: boolean) {
  return `
  ${createCarViewButtons(name, id)}
  <div class="lane">
    <div class="starting-point">
      ${createCarEngineButtons(id, isEngineStarted)}
      ${createCarView(id, color)}
    </div>
    <div class="finish-flag" id="finish-flag-${id}">&#127937</div>
 </div>
  `;
}
