import type { PlayerSteamData } from "../player/playerSteamData.ts";

export type Player = {
  country: string;
  id: number;
  name: string;
  steam: PlayerSteamData;
  url: string;
};
