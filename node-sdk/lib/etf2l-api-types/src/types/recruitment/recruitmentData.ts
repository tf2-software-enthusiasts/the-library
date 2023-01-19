import type { Classes } from "types/enums/classes";
import type { PlayerSteamData } from "types/player/playerSteamData";

export type RecruitmentData = {
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