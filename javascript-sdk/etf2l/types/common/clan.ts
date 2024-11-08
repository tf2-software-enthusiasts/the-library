import type { SteamData } from "./steamData.ts";

export type Clan = {
  country: string;
  drop: boolean;
  id: number;
  name: string;
  steam: SteamData
  url: string;
}