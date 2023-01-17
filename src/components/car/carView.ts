import { createCarImage } from './carImage';

export function createCarView(id: number, color: string) {
  return `
  <div class="car" id="car-${id}">
  ${createCarImage(color)}
  </div>`;
}
