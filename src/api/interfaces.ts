export interface ICarDataCreate {
  name: string;
  color: string;
}

export interface ICarDataGet {
  name: string;
  color: string;
  id: number;
}

export interface ICarsInGarageData {
  items: { name: string; color: string; id: number }[];
  count: string | null;
}

export interface IWinnerData {
  id: number;
  wins: number;
  time: number;
}

export interface IWinnersData {
  items: { car: ICarDataGet; id: number; wins: number; time: number }[];
  count: string | null;
}

export interface ICarStartStopEngine {
  velocity: number;
  distance: number;
}

export interface ICarDriveEngine {
  success: boolean;
}

export interface IStoreAnimationState {
  [carId: number]: { requestId: number };
}
