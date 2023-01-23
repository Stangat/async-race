import { getElementCenterCoordinates } from './getElementCenterCoordinates';

export function getDistanceBetweenElements(elem1: HTMLElement, elem2: HTMLElement) {
  const elem1CenterCoordinates = getElementCenterCoordinates(elem1);
  const elem2CenterCoordinates = getElementCenterCoordinates(elem2);
  const distance = Math.hypot(
    elem1CenterCoordinates.x - elem2CenterCoordinates.x,
    elem1CenterCoordinates.y - elem2CenterCoordinates.y
  );
  return distance;
}
