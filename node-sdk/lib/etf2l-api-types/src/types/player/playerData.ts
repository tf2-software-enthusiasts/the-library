import type { Classes } from "types/enums/classes";
import type { PlayerSteamData } from "./playerSteamData";
import type { PlayerTeam } from "./playerTeam";

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