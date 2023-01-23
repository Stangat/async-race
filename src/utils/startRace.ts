import { ICarDataGet } from '../api/interfaces';
import { getLocalStorage } from '../store/store';

type RaceWinner = { name: string; color: string; id: number; time: number };

type DrivingCar = {
  success: boolean;
  id: number;
  time: number;
};

type CallbackFunction = (id: number) => Promise<
  | {
      success: boolean;
      id: number;
      time: number;
    }
  | undefined
>;

export async function getRaceWinner(promises: Promise<DrivingCar>[], idArray: number[]): Promise<RaceWinner> {
  const { success, id, time } = await Promise.race(promises);

  if (!success) {
    const looserCarIndex = idArray.findIndex((i) => i === id);
    promises.splice(looserCarIndex, 1);
    const remainedIds = [...idArray.slice(0, looserCarIndex), ...idArray.slice(looserCarIndex + 1, idArray.length)];
    return getRaceWinner(promises, remainedIds);
  }
  const carWinnerAndTimeObj: RaceWinner = {
    ...getLocalStorage('carsInGarage').items.find((item: ICarDataGet) => item.id === id),
    time: +(time / 1000).toFixed(2),
  };
  return carWinnerAndTimeObj;
}

export async function startRace(callback: CallbackFunction) {
  const promises: Promise<DrivingCar>[] = getLocalStorage('carsInGarage').items.map((item: ICarDataGet) =>
    callback(item.id)
  );

  const raceWinner = await getRaceWinner(
    promises,
    getLocalStorage('carsInGarage').items.map((item: ICarDataGet) => item.id)
  );
  return raceWinner;
}
