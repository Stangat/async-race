import { startEngine } from '../api/engine/startEngine';

export async function getTime(id: number) {
  const engineResponse = await startEngine(id);
  const { velocity } = engineResponse;
  const { distance } = engineResponse;
  const time = Math.round(distance / velocity);
  return time;
}
