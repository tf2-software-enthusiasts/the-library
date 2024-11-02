import type { TeamType } from "./enums/teamType.ts";

export type RoundEvent = {
  type: string;
  time: number;
  team: TeamType;
  point: number;
};
