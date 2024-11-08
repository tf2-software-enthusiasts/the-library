import type { PlayerSteamData } from "../player/playerSteamData.ts";

export type MatchPlayer = {
  country: string;
  id: number;
  name: string;
  team_id: number;
  steam: PlayerSteamData;
};