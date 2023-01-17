export interface ICarDataCreate {
  name: string;
  color: string;
}

export interface ICarDataGet {
  name: string;
  color: string;
  id: number;
}

export interface IWinnerData {
  id: number;
  wins: number;
  time: number;
}

export interface ICarsInGarageData {
  items: { name: string; color: string; id: number }[];
  count: string | null;
}
