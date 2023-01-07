import type { Classes } from "types/enums/classes";
import type { Team } from "types/team/team";
import type { PlayerSteamData } from "./playerSteamData";

export type PlayerInformationData = {
  //TODO:
  bans: null;
  classes: Classes[];
  country: string;
  id: number;
  name: string;
  steam: PlayerSteamData;
  teams: Team;
  title: string;
  urls: {
    results: string;
    self: string;
    transfers: string;
  };
};