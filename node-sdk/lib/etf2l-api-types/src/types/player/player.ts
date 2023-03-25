import type { PlayerSteamData } from "types/player/playerSteamData";

export type Player = {
  country: string;
  id: number;
  name: string;
  steam: PlayerSteamData;
  url: string;
};