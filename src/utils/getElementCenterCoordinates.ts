export function getElementCenterCoordinates(elem: HTMLElement) {
  const { left } = elem.getBoundingClientRect();
  const { top } = elem.getBoundingClientRect();
  const { width } = elem.getBoundingClientRect();
  const { height } = elem.getBoundingClientRect();
  const x = left + width / 2;
  const y = top + height / 2;
  const coordinates = { x, y };
  return coordinates;
}
