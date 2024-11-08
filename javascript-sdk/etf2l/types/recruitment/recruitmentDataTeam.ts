import type { Classes } from "../enums/classes.ts";
import type { PlayerSteamData } from "../player/playerSteamData.ts";

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