import type { Classes } from "../enums/classes.ts";
import type { PlayerSteamData } from "./playerSteamData.ts";
import type { PlayerTeam } from "./playerTeam.ts";

export type PlayerData = {
  //TODO:
  bans: null;
  classes: Classes[];
  country: string;
  id: number;
  name: string;
  steam: PlayerSteamData;
  teams: PlayerTeam[];
  title: string;
  urls: {
    results: string;
    self: string;
    transfers: string;
  };
};