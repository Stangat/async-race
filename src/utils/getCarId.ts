export function getCarId(string: string) {
  if (window.event) {
    const eventTarget = window.event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      const id: number = +eventTarget.id.split(string)[1];
      return id;
    }
  }
  return 0;
}
