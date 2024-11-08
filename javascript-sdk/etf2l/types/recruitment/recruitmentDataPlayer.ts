import type { Classes } from "../enums/classes.ts";
import type { PlayerSteamData } from "../player/playerSteamData.ts";

export type RecruitmentDataPlayer = {
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
    player: string;
    recruitment: string;
  }
};