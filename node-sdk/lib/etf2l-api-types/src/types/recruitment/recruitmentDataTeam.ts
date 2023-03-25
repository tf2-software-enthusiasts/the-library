import type { Classes } from "types/enums/classes";
import type { PlayerSteamData } from "types/player/playerSteamData";

export type RecruitmentDataTeam = {
  classes: Classes[];
  comments: {
    count: number;
    last: number | null;
  };
  id: number;
  name: string;
  skill: string;
  steam: PlayerSteamData;
  type: string;
  urls: {
    team: string;
    recruitment: string;
  }
};