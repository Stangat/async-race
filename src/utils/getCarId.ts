export function getCarId(string: string) {
  if (event) {
    const eventTarget = event.target;
    if (eventTarget instanceof HTMLButtonElement) {
      const id: number = +eventTarget.id.split(string)[1];
      return id;
    }
  }
  return 0;
}
