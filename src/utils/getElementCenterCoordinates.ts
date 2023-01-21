export function getElementCenterCoordinates(elem: HTMLElement) {
  const left = elem.getBoundingClientRect().left;
  const top = elem.getBoundingClientRect().top;
  const width = elem.getBoundingClientRect().width;
  const height = elem.getBoundingClientRect().height;
  const x = left + width / 2;
  const y = top + height / 2;
  const coordinates = { x: x, y: y };
  return coordinates;
}
