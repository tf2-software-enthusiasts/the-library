import type { PlayerSteamData } from "../player/playerSteamData.ts";

export type TeamTransferPlayer = {
  country: string;
  id: number;
  name: string;
  steam: PlayerSteamData;
  url: string;
};