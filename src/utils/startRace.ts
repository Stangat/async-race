import { ICarDataGet } from '../api/interfaces';
import { getLocalStorage } from '../store/store';

type RaceWinner = { name: string; color: string; id: number; time: number };
type DrivingCar = {
  success: boolean;
  id: number;
  time: number;
};

export async function getRaceWinner(promises: Promise<DrivingCar>[], idArray: number[]): Promise<RaceWinner> {
  const { success, id, time } = await Promise.race(promises);

  if (!success) {
    const looserCarIndex = idArray.findIndex((i) => i === id);
    [...promises.splice(looserCarIndex, 1)];
    const restIds = [...idArray.slice(0, looserCarIndex), ...idArray.slice(looserCarIndex + 1, idArray.length)];
    return getRaceWinner(promises, restIds);
  }
  const carWinnerAndTimeObj: RaceWinner = {
    ...getLocalStorage('carsInGarage').items.find((item: ICarDataGet) => item.id === id),
    time: +(time / 1000).toFixed(2),
  };
  return carWinnerAndTimeObj;
}

export async function startRace(callback: Function) {
  const carsInGarage: ICarDataGet[] = getLocalStorage('carsInGarage').items;
  const promises: Promise<DrivingCar>[] = carsInGarage.map((item: ICarDataGet) => callback(item.id));

  const raceWinner = await getRaceWinner(
    promises,
    getLocalStorage('carsInGarage').items.map((item: ICarDataGet) => item.id)
  );
  return raceWinner;
}
