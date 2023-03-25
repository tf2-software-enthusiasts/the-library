import type { PlayerSteamData } from "types/player/playerSteamData";

export type TeamTransferPlayer = {
  country: string;
  id: number;
  name: string;
  steam: PlayerSteamData;
  url: string;
};