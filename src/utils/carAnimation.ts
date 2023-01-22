type animationState = {
  requestId: number;
};

export function carAnimation(car: HTMLElement, distance: number, time: number) {
  let start: number;
  const requestIdState: animationState = <animationState>{};

  function step(timestamp: number) {
    if (start === undefined) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    const speed = distance / time;
    const distancePassed = Math.round(elapsed * speed);

    const count = Math.min(distancePassed, distance);
    car.style.transform = `translateX(${count}px)`;

    if (distancePassed < distance) {
      requestIdState.requestId = window.requestAnimationFrame(step);
    }
  }

  requestIdState.requestId = window.requestAnimationFrame(step);
  return requestIdState;
}
