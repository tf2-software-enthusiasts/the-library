import type { PlayerSteamData } from "types/player/playerSteamData";

export type MatchPlayer = {
  country: string;
  id: number;
  name: string;
  team_id: number;
  steam: PlayerSteamData;
};