import type { TeamType } from "./enums/teamType";

export type RoundEvent = {
  type: string;
  time: number;
  team: TeamType;
  point: number;
};
